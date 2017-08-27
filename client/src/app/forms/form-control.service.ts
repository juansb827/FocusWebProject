/*
     Service for transforming a Form object into 
     an angular FormGroup
*/
import { Injectable }       from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Form } from './form';
import { FieldBase } from './field-base';

@Injectable()
export class FormControlService{
    

    toFormGroup(form:Form ){
        const fields: FieldBase<any>[]=form.fields;
        let formControls: any={};
        fields.forEach(field=>{
            formControls[""]= new FormControl(field);
        });
        //return new FormGroup(controls);
    }


}