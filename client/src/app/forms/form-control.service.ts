/*
     Service for transforming a Form object into 
     an angular FormGroup
*/
import { Injectable }       from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Form,FormError } from './form';
import { FieldBase,ItemGroup } from './field-base';

@Injectable()
export class FormControlService{
    //TODO: remove Copy Paste

    toFormGroup(form:Form ){
        const fields: FieldBase<any>[]=form.fields;
        let formControls: any={};
        fields.forEach(field=>{
            this.addControl(field, formControls);            
        });
        return new FormGroup(formControls);
    }

    /*  Based on the Field Object, creates a FormControl and adds it to the formControls,*/
    addControl(field:FieldBase<any>, collection){
        if (collection[field.id]) {
            throw new FormError('');
        };
        if(field.controlType==='empty') return;
            
        
        collection[field.id]=field.required? 
        new FormControl({value:field.value,disabled:false}, Validators.required)
        :    new FormControl(field.value); 
        if(field.controlType==='itemgroup' &&  (field as ItemGroup).subItems ){//such recursion :v
            (field as ItemGroup).subItems.forEach(subItem=>{
                this.addControl(subItem,collection);
            })
        }
    }

  

    /* For the form editor*/
    addFormControl(formGroup:FormGroup, field: FieldBase<any>){
        let control= field.required? new FormControl(field.value, Validators.required)
        :    new FormControl(field.value); 
        formGroup.addControl(field.id,control);        
    }




}