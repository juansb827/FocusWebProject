import { Component, Input, OnInit, AfterViewInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MyFormDirective } from './forms.directive'
import { FormControlService } from './form-control.service'
import { FormService } from './form.service'
import { Form, FormError } from './form'
import { FieldBase } from './field-base'
import { DragulaService } from 'ng2-dragula';


@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',  //<ng-template ad-host></ng-template>
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [FormControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() form: Form;


  private fields;
  formGroup: FormGroup;
  formData: any;
  editMode: boolean=true;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private fcService: FormControlService,
    private dragService: DragulaService) {      
    dragService.setOptions('nested-bag', {
      moves: function (el: any, container: any, handle: any): any {
     //   console.log(el, container);
       // console.log("ha", handle.className);
        return handle.className.indexOf('handle')!==-1;//handle.className === 'handle';
      }
    });

  }

  ngOnInit() {
    console.log("formObject",this.form);
    this.updateFormGroup();
  }

  resetForm() {
    this.formGroup.reset();
  }

  updateFormGroup() {
    try{
      this.formGroup = this.fcService.toFormGroup(this.form);
    }catch(e){
      if(e instanceof FormError) console.log("Error generando el formulario");
      else   throw e;
      
    }
  }

  onSubmit() {

  }




}

import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'times'})
export class TimesPipe implements PipeTransform {
  transform(value: number): any {
    const iterable = {};
    iterable[Symbol.iterator] = function* () {
      let n = 0;
      while (n < value) {
        yield ++n;
      }
    };
    return iterable;
  }
}
