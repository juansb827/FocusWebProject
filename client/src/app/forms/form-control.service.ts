/*
     Service for transforming a Form object into 
     an angular FormGroup
*/
import { Injectable }       from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Form } from './form';
import { FieldBase } from './field-base';

@Injectable()
export class FormControlService{
    

    toFormGroup(form:Form ){
        const fields: FieldBase<any>[]=form.fields;
        let formControls: any={};
        fields.forEach(field=>{
            formControls[field.id]= field.required? new FormControl({value:field.value,disabled:false}, Validators.required)
                                    :    new FormControl(field.value); 
        });
        return new FormGroup(formControls);
    }

    addFormControl(formGroup:FormGroup, field: FieldBase<any>){
        let control= field.required? new FormControl(field.value, Validators.required)
        :    new FormControl(field.value); 
        formGroup.addControl(field.id,control);        
    }




}