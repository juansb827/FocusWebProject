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
  formGroup: FormGroup;
  initialValues: Object;
  //for the form editor
  editMode: boolean = false;

  constructor(
    private formService: FormService,
    private fcService: FormControlService,
    private dragService: DragulaService) {
    dragService.setOptions('nested-bag', {
      moves: function (el: any, container: any, handle: any): any {
        //   console.log(el, container);
        // console.log("ha", handle.className);
        return handle.className.indexOf('handle') !== -1;//handle.className === 'handle';
      }
    });

  }

  ngOnInit() {
    // console.log("formObject",this.form);
    this.updateFormGroup();
    if (this.formGroup) {
      this.initialValues = this.formGroup.value;
    }
  }

  resetForm() {
    console.log("ds");
    this.formGroup.reset(
      this.initialValues
    );
  }

  updateFormGroup() {
    try {
      this.formGroup = this.fcService.toFormGroup(this.form);
    } catch (e) {
      if (e instanceof FormError) console.log("Error generando el formulario");
      else throw e;

    }
  }

  onSubmit() {
    //if(1==1) return;
    console.log("preformData", this.formGroup.value);
    const formData = this.fcService.getFormGroupData(this.formGroup);
    console.log("formData",JSON.stringify (formData ));
    this.formService.saveFormData(formData)
      .finally(() => console.log("final2"))
      .subscribe(
      x => console.log("success", x),
      e => console.log("error", e),
      () => console.log("final")
      );

  }
}

import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'times' })
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
