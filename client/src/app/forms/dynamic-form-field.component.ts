import { Component, Input, OnInit } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { FieldBase }        from './field-base';



@Component({
  selector: 'form-field',
  templateUrl: './dynamic-form-field.component.html'
})
export class DynamicFormFieldComponent implements OnInit {
  @Input() field:FieldBase<any>;
  @Input() formGroup: FormGroup;
  get isValid() { return this.formGroup.controls[this.field.id].valid; }

  ngOnInit(){
    console.log("form",this.formGroup);
  }
}
