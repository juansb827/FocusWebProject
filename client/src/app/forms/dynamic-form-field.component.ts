import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase, Autocomplete } from './field-base';
import { DataSet, DataSetItem } from './form';
import { FormService } from './form.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';


@Component({
  selector: 'form-field',
  templateUrl: './dynamic-form-field.component.html'
})
export class DynamicFormFieldComponent implements OnInit {
  @Input() field: FieldBase<any>;
  @Input() formGroup: FormGroup;
  /* For autocomplete */
  filteredOptions: Observable<any[]>;
  lastFilter: DataSetItem[];
  /* For controls with an options list */
  optionList : DataSetItem[];

  constructor(private formService: FormService) {

  }

  get isValid() { return this.formGroup.controls[this.field.id].valid; }

  ngOnInit() {   
    
    if (this.field.datasetName) {      
      this.loadDataset();
    }


  }

  loadDataset() {
    const control: Autocomplete = this.field as Autocomplete;

    //gets the dataSet from the formservice
    this.formService.getDataSet(control.datasetName)
    //.finally(      () => console.log("Loading done"))
    .subscribe(
      dataSet => {
        if (!dataSet) return;
          const options = (dataSet as DataSet).items;
          if (this.field.controlType === 'autocomplete') this.initAutocomplete(options);
          else {
            this.optionList=options;  
          }
        
      }

    );

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
    console.log("Val", val);
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
    return option ? option.value + " - " + option.label : '';
  }

  /* 
    Used for AutoComplete control. 
    Checks whether the value of the field is valid after the users 
    leaves the field.
  */
  onBlurMethod() {
    const control = this.formGroup.get(this.field.id);
    const value = control.value;

    if (typeof value !== 'object' && this.lastFilter.length === 1) {
      //When the user leaves the field without selecting an option, 
      //but what he has typed matches one of the options exactly       
      const concat = this.displayFn(this.lastFilter[0]);
      if (value.toLowerCase() === concat.toLowerCase())
        control.setValue(this.lastFilter[0]);
    }
    //TODO: make the control invalid;
    if (typeof control.value !== 'object') {
      control.setValue("");
      //console.log("invalidValue", control.value);
    }
    



  }

}
