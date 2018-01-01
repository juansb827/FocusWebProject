import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase, Autocomplete } from './field-base';
import { DataSet, DataSetItem } from './form';
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
export class DynamicFormFieldComponent implements OnInit {
  @Input() field: FieldBase<any>;
  @Input() formGroup: FormGroup;
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

    if (this.field.controlType == 'datepicker') {
      this.handleDateInput();
    }
    //TODO fix field class 
    if (this.field.controlType == 'autocomplete' && this.field.triggers
           && this.field.triggers.on==FieldBase.triggers.typing) {
      this.initRemoteAutocomplete();
    } else if (this.field.datasetName) {
      this.loadDataset();
    } else if (this.field.dataset) {
      this.optionList = this.field.dataset
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
            this.initAutocomplete(options);
          }
          else {
            this.optionList = options;
          }
        }
        );

    }



  }
  /**
   * Autocomplete over a list that is too big to be stored on the client side,
   * After each keystroke, an API call is performed. 
   * The api will response with a list of maximum 20 results..
   * In order to reduce the number of API calls,  once the API responds a list of  19 results or less,
   * We store this last set of results, and perform subsequent searches over it, instead of calling the API. 
   * 
   * 
   * eg: let's say they user will type 'Item42999'
   * 
   * 
   * At a given moment, the user has typed: 'Item', suppose that the API responds with 30 results,(which is >20) 
   * so, for the next keypress we will call the api.
   * User presses '4' (Searchterm becomes 'Item4') , suppose that he API responds with 19 results (which is <20), 
   * so we know that results of subsequent searchterms will we included in this lists of 19 results 
   * we just received, 
   * so we store this last set of results and subsequent searches will be issued using that 
   * list instead of calling the api.
   * 
   * Api calls will be done again, only if search terms becomes something that doesn't contain
   *  'Item4' (the search term that made the api return less than 20 reults ) 
   *   eg : 'Item', 'Ite', 'NewWord', 'Hu3hu3'  etc.. 
   * 
   *
   */
  initRemoteAutocomplete() {

    const API_MAX_NUM_OF_RESULTS = 20;
    let lastData;
    let lastTerm; //last searchTerm used to call the API
    let remote = true;
    this.filteredOptions = this.formGroup.controls[this.field.id].valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .filter(item => (typeof item) == 'string')
      .switchMap(term => {
      //  console.log("this", term, "last", '|' + lastTerm + '|');
        //console.log("inc", term.includes(lastTerm));
        //if (lastTerm) console.log("len", lastTerm.length);

        if (remote || !term.includes(lastTerm)) { //does a search using the api          
          remote = true;
          //ignores inputs with length <4
          if (term.length < 4) { lastTerm = null; return Observable.of([]) };
          lastTerm = term;
          return this.formService.searchData(term,this.field.triggers.query)
            .catch(err => { console.log('err', err); return Observable.of([]); })
        } else { //does a search using the last set of items retrieved from the api       
          const filtered = this.filter(term, lastData);
          return Observable.of(filtered);
        }
      })
      .map(data => {
        if (remote) {
          lastData = data;
          //Keep making API calls if we get 20 or more results 
          remote = (lastData.length >= API_MAX_NUM_OF_RESULTS);
          if (!remote) console.log("changeOffLineSearch", lastData.length, "n", lastTerm);
        }
        return data;
      })

  }

  /**
   *  @param options 
   */

  initAutocomplete(options) {
    //subscribes to the  value changes from the textinput
    this.filteredOptions = this.formGroup.controls[this.field.id].valueChanges
      .startWith(null)
      //When the user selects an option, the value of the textbox becomes and object
      .map(option => (option && typeof option === 'object') ? option.value : option)
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
    if (this.field.triggers && this.field.triggers.on==FieldBase.triggers.leaveField) {
      console.log("Query triggered");
      this.formService.doFieldQuery(this.field, this.formGroup.value).subscribe(data => {
        console.log("data", data);
        this.formGroup.patchValue(data);
      });
    }


  }
  /* 
    Used for AutoComplete control. 
    Checks whether the value of the field is valid after the users 
    leaves the field.
  */
  onBlurAutoComplete() {
    //TODo check how this behaves with chnages on autocomplete
    if (1 == 1) return;
    if (this.autoCompOptions) {
      //onBlur is called when the user select an option form the autocompletelist
      if (this.autoCompOptions.isOpen) return;
    }
    const control = this.formGroup.get(this.field.id);
    const value = control.value;
    if (typeof value !== 'object' && this.lastFilter.length === 1) {
      //When the user leaves the field without selecting an option, 
      //but what he has typed matches one of the options exactly       
      const concat = this.displayFn(this.lastFilter[0]);
      if (value.toLowerCase() === concat.toLowerCase())
        control.setValue(this.lastFilter[0]);
    }
    //TODO: make the control invalid instead of deleting the field content;
    if (typeof control.value !== 'object') {
      control.setValue("");
      console.log("invalidValue", control.value);
    }



  }

}


