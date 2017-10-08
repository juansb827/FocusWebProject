import { Component, Input, OnInit } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { FieldBase,Autocomplete }        from './field-base';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';


@Component({
  selector: 'form-field',
  templateUrl: './dynamic-form-field.component.html'
})
export class DynamicFormFieldComponent implements OnInit {
  @Input() field:FieldBase<any>;
  @Input() formGroup: FormGroup;
  filteredOptions : Observable<any[]>;
  get isValid() { return this.formGroup.controls[this.field.id].valid; }

  ngOnInit(){
    console.log("form",this.formGroup);
    if(this.field.controlType==='autocomplete'){
      this.initAutoComplete();
    }
    

  }
   
  initAutoComplete(){
    const autCompControl:Autocomplete=this.field as Autocomplete;
    const options=autCompControl.optionList;
    this.filteredOptions = this.formGroup.controls[this.field.id].valueChanges    
    .startWith(null)    
    .map(val => val ? this.filter(val,options) : options.slice());      
  }

  //Checks if "Val" it's the start of any option.
  filter(val: string, options): string[] {    
    
    return  options.filter(option =>      
      option.toLowerCase().indexOf(val.toLowerCase()) !== -1); 
 }

}
