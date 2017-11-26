import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase, Autocomplete } from './field-base';
import { DataSet, DataSetItem } from './form';
import { FormService } from './form.service';
import { Observable,Subject } from 'rxjs/';
import { DateAdapter } from '@angular/material';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
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
  @ViewChild('autoComplete')  autoCompOptions;
  /* For controls with an options list */
  optionList : DataSetItem[];

  constructor(private formService: FormService
                ) {
             //     this.dateAdapter.setLocale('es-CO');
             ;
  }

  get isValid() { return this.formGroup.controls[this.field.id].valid; }
  get controlModel() {return this.formGroup.get(this.field.id)}  

  ngOnInit() {   
    
    if(this.field.controlType=='datepicker'){
      this.handleDateInput();            
    } 
    //TODO fix field class 
    if (this.field.triggers && this.field.triggers.on){
      //TODO move to method
      let obs=new Subject<any[]>();
      this.filteredOptions=obs.asObservable();
      obs.next([{value:'a',label:'b'}]);

      this.filteredOptions= this.formGroup.controls[this.field.id].valueChanges      
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(term=>{
        console.log('input',term);
        return   this.formService.searchData(term);
        
         
      })
    }else if (this.field.datasetName) {      
      this.loadDataset();
    }else if(this.field.dataset){
      this.optionList=this.field.dataset    
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
    
    if(this.field.datasetProperties){

    }else{
      this.formService.getDataSet(control.datasetName)    
      .subscribe(
        dataSet => {
          if (!dataSet) return;
            const options = (dataSet as DataSet).items;
            if (this.field.controlType === 'autocomplete'  ){            
              this.initAutocomplete(options);
            } 
            else {
              this.optionList=options;  
            }        
        }
      );
  
    }
    


  }

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

  handleDateInput(){   
    
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

  onBlurDatepicker(){   
    
    console.log("err",this.controlModel.errors);
    console.log("value",this.controlModel.value);
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

  onBlurInput(){
    
    
      
      if(this.field.triggers && !this.field.triggers.on){
        console.log("Query triggered"); 
        this.formService.doFieldQuery(this.field,this.formGroup.value).subscribe(data=>{
          console.log("data",data);
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
    if(1==1) return;
    if(this.autoCompOptions) {
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


