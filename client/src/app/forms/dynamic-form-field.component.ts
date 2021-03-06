import { Component, Input, OnInit, ViewChild, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase, Autocomplete } from './field-base';
import { DataSet, DataSetItem, Form } from './form';
import { FormService } from './form.service';
import { Observable, Subject } from 'rxjs/';
import { DateAdapter } from '@angular/material';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';

import * as moment from 'moment';




@Component({
  selector: 'form-field',
  templateUrl: './dynamic-form-field.component.html',
  
})
export class DynamicFormFieldComponent implements OnInit, OnChanges {
  @Input() field: FieldBase<any>;
  @Input() formGroup: FormGroup;
  @Input() form: Form;
  /* For autocomplete */
  filteredOptions: Observable<any[]>;
  lastFilter: DataSetItem[];
  @ViewChild('autoComplete') autoCompOptions;
  /* For controls with an options list */
  optionList: DataSetItem[];

  constructor(private formService: FormService
  ) {
    //     this.dateAdapter.setLocale('es-CO');
    ;
    
  }

  get isValid() { return this.formGroup.controls[this.field.id].valid; }
  get controlModel() { return this.formGroup.get(this.field.id) }

  ngOnInit() {
    
  }

  ngOnChanges() {
    
    if (this.field.controlType == 'datepicker') {
      this.handleDateInput();
    }
    if (this.field.controlType == 'radioGroup'){

    }
    //TODO fix field class 
    if (this.field.controlType == 'autocomplete' && this.field.triggers
      && this.field.triggers.on == FieldBase.triggers.typing) {
      const searchTerms = this.controlModel.valueChanges;      
      this.filteredOptions = this.initRemoteAutocomplete(searchTerms);

    } else if (this.field.datasetName) {
      this.loadDataset();
    } else if (this.field.dataset) {
      this.optionList = this.field.dataset
    }


  }

  onClickRadioButton(event){    
    if(this.field.readonly){
      event.preventDefault();
    }
    
  }




  toDate(dateStr) {
    //const [day, month, year] = dateStr.split("-")

    return moment(dateStr, 'DD-MM-YYYY');
  }

  loadDataset() {
    const control: Autocomplete = this.field as Autocomplete;
    //.finally(      () => console.log("Loading done"))
    //gets the dataSet from the formservice

    if (this.field.datasetProperties) {

    } else {
      this.formService.getDataSet(control.datasetName)
        .subscribe(
          dataSet => {
            if (!dataSet) return;
            const options = (dataSet as DataSet).items;
            if (this.field.controlType === 'autocomplete') {
              const searchTerms = this.formGroup.controls[this.field.id].valueChanges;
              this.filteredOptions = this.initAutocomplete(searchTerms,options);
            }
            else {
              this.optionList = options;
            }
          }
        );

    }



  }
  /**
   * @param searchTerms - Stream of search terms
   * @returns an observable of search results
   * Autocomplete over a list that is too big to be stored on the client side,
   * After each keystroke, an API call is performed. 
   * The api will respond with a list of maximum API_MAX_NUM_OF_RESULTS results
   * In order to reduce the number of API calls,  once the API responds a list of less than (API_MAX_NUM_OF_RESULTS ) ,
   * We store  that set of results, and perform subsequent searches over it, instead of calling the API
   *  (unless prefix of search term changes). 
   * 
   * 
   * eg: let's say they user will type 'Item42999' and suppose that API_MAX_NUM_OF_RESULTS is 20
   * 
   * 
   * At a given moment, the user has typed: 'Item', suppose that the API responds with 20 results,(which is >=API_MAX_NUM_OF_RESULTS) 
   * so, for the next keypress we will call the api.
   * User presses '4' (Searchterm becomes 'Item4') , suppose that he API responds with 19 results (which is <API_MAX_NUM_OF_RESULTS), 
   * so we know that results of subsequent searchterms will we included in this lists of 19 results 
   * we just received, 
   * We store this last set of results and subsequent searches will be issued using that 
   * list instead of calling the api.
   * 
   * Note: Api calls will be done again, only if search terms becomes something that doesn't start with
   *  'Item4' (the search term that made the api return less than API_MAX_NUM_OF_RESULTS reults ) 
   *   eg : 'Item', 'Ite', 'NewWord', 'Hu3hu3'  etc.. 
   * 
   *
   */
  initRemoteAutocomplete(searchTerms:Observable<any>): Observable<any> {
    //todo move this constant to the right place
    const API_MAX_NUM_OF_RESULTS = 10;
    let lastData;
    let lastTerm; //last searchTerm used to call the API
    let remote = true;
    console.log("Init remote autocomplete", this.field.id);
    return searchTerms
      .debounceTime(500)
      .distinctUntilChanged()
      .filter(term => {
        return (typeof term) == 'string'
      })
      .switchMap(term => {
        //  console.log("this", term, "last", '|' + lastTerm + '|');
        //console.log("inc", term.includes(lastTerm));
        //if (lastTerm) console.log("len", lastTerm.length);
        console.log("term", term);
        //if remote or the new term doesnt contains the last term (that triggered an api call) as prefix         
        if (remote || term.indexOf(lastTerm) != 0) {
          remote = true;
          //ignores inputs with length <4
          if (term.length < 4) { lastTerm = null; return Observable.of([]) };
          lastTerm = term;
          console.log("SearchingOnline", term);
          return this.formService.searchData(term, this.field.triggers.query)
            .catch(err => { console.log('err', err); return Observable.of([]); })
        } else { //does an offline-search within the last set of items retrieved from the api       
          console.log("SearchingOffline", term);
          const filtered = this.filter(term, lastData);
          return Observable.of(filtered);
        }
      })
      .map(data => {
        if (remote) {
          lastData = data;
          //Keep making API calls if we get MAX_NUM_OF_RESULTS or more results 
          remote = (lastData.length >= API_MAX_NUM_OF_RESULTS);
          if (!remote) console.log("changedToOffLineSearch", lastData.length, lastTerm);
        }
        this.lastFilter = data;
        return data;
      })

  }

  /**
   *  @param options 
   */

  initAutocomplete(searchTerms: Observable<any>,options): Observable<any> {
    //subscribes to the  value changes from the textinput
    return searchTerms
      .startWith(null)
      //When the user selects an option, the value of the textbox becomes and object
      .map(option => (option && typeof option === 'object') ? this.displayFn(option) : option)
      .map(val => {
        this.lastFilter = val ? this.filter(val, options) : options.slice();
        return this.lastFilter;
      });
  }



  /*
  Checks if "Val" it's the start of any option.
  */
  filter(val: string, options): DataSetItem[] {

    return options.filter(option => {
      const item = option as DataSetItem;
      const text = val.toLowerCase();

      //console.log("val:"+text+":concat:"+concat+":index:"+concat.indexOf(text));
      const concat = this.displayFn(option).toLowerCase();

      return concat.indexOf(text) !== -1;
    }

    );
  }

  /*
  */
  displayFn(option: DataSetItem): string {
    return option ? option.value.trim() + " - " + option.label.trim() : '';
  }

  /*

  */

  handleDateInput() {

    /*
   const control=this.formGroup.controls[this.field.id];
   let lastVal;

   control.valueChanges.forEach(value=>{      
     
     //When the user is pressing backspace isWriting becomes false
     const isWriting=lastVal && (value.length>lastVal.length);      
     if(isWriting ){
       if(value.length==2) control.setValue(value+'-');
       if(value.length==5) control.setValue(value+'-');
       if(value.length==10) {
         const fecha=this.toDate(value);
         if(!fecha.isValid())
           this.formGroup.controls[this.field.id].setErrors({'incorrect':true})
       }
     } 
    if(value.length==11) control.setValue(lastVal)
    else lastVal=value;  
   });
   console.log("datepicker",control);
  */
  }

  onBlurDatepicker() {

    console.log("err", this.controlModel.errors);
    console.log("value", this.controlModel.value);
    //if (this.controlModel.errors) this.controlModel.setValue('.');
    /* 
    let date=this.toDate(control.value);
    if( !date.isValid() ){
      this.formGroup.controls[this.field.id].setErrors({'incorrect':true})
      console.log("valuedate",date); 
    }else{
      control.setValue(date.format('DD-MM-YYYY'));
    } */
  }

  onBlurInput() {
    if (this.field.triggers && this.field.triggers.on == FieldBase.triggers.leaveField) {
      //don't trigger the query if the field is empty
      if( !this.controlModel.value || !this.controlModel.value.trim() ){        
          this.clearFields(this.field.triggers.updates);               
        return;
      }
      console.log("Query triggered");
      this.formService.doFieldQuery(this.field, this.formGroup.value, this.form)        
        .subscribe(data => {
          //if the query retrieved no results, we must clear the updatedFields
          console.log("data", data);
          if(!data ){
            this.clearFields(this.field.triggers.updates  );
          }else{
            this.formGroup.patchValue(data);
          }
          
          
        });
    }

  }

  clearFields(ids: string[] ){
    if(!ids) return;
    ids.forEach( id => this.formGroup.get(id).setValue(""))
  }
  /* 
    Used for AutoComplete control. 
    Checks whether the value of the field is valid after the users 
    leaves the field.
  */
  onBlurAutoComplete() {
    const control = this.formGroup.get(this.field.id);
    
    console.log("blurauto",  control);   

    
    if (this.autoCompOptions) {
      //onBlur is also called when the user select an option form the autocompletelist
    //  if (this.autoCompOptions.isOpen) return;
    }
    
    const value = control.value;
    console.log("Type",typeof value !== 'object');
    if (typeof value !== 'object' && this.lastFilter.length === 1) {
      //When the user leaves the field without selecting an option, 
      //but what he has typed matches one of the options exactly       
      const concat = this.displayFn(this.lastFilter[0]);
      if (value.toLowerCase() === concat.toLowerCase())
        control.setValue(this.lastFilter[0]);
    }



  }

}


