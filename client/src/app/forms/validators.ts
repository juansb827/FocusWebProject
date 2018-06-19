import * as moment from 'moment';
import {AbstractControl, ValidatorFn } from '@angular/forms';
import {DataSetItem} from './form'
export function dateValidator(dateFormat: string,minDate?,maxDate?): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const date=moment(control.value, dateFormat,true);
      
      let validationError=null;
      

      if(!date.isValid()) validationError={'invalidDate': {value: control.value}};

      if(!validationError && minDate){        
        if(date.isBefore(minDate))
            validationError=  {'minDate': minDate};
      }
      if(!validationError && maxDate){
       
        if (date.isAfter(maxDate))
          validationError = {'maxDate': maxDate};
      }

      //console.log('invalidness',invalidness);
      return validationError;
    };
  

}

export function objectValidator(typeGuard: Function, canBeEmpty:boolean){
  return (control: AbstractControl): {[key: string]: any} => {    

    if( (!control.value && canBeEmpty) 
          || (control.value && typeGuard(control.value)) ){
      return null;
    }

    return {'error': 'not belong to the expected type'};

  }

}



import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[OnlyNumber]'
})
export class OnlyNumber {

  constructor(private el: ElementRef) { }

  @Input() OnlyNumber: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent> event;
    if (this.OnlyNumber) {
      if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+C
        (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+V
        (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+X
        (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
          // let it happen, don't do anything
          return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
      }
  }
}