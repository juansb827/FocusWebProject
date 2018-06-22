/*
     Service for transforming a Form object into 
     an angular FormGroup
*/
import { Injectable }       from '@angular/core';
import { FormControl, FormGroup,Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Form,DataSetItem,FormError, isDataSetItem } from './form';
import { FieldBase,ItemGroup } from './field-base';
import {dateValidator, objectValidator} from './validators'
import * as moment from 'moment';


@Injectable()
export class FormControlService{
    //TODO: remove Copy Paste

    /**
     * Convers a Form into an angular FormGroup
     * @param form 
     */
    toFormGroup(form:Form ){
        const fields: FieldBase<any>[]=form.fields;
        let formControls: any={};
        fields.forEach(field=>{
            this.addControl(field, formControls);            
        });
        return new FormGroup(formControls);
    }

    /* Returns a JS Object containing all the form fields.*/    
    getFields(form:Form){
        const fields={};
        this.addFields(form.fields,fields);
        return fields;

    }

    /* Adds all the fields, and their childer(in case they have) to a JS Map.*/    
    private addFields(fields:FieldBase<any>[], collection){
        fields.forEach(field => {
            if (field.subItems){
                this.addFields(field.subItems,collection);    
            }else{
                collection[field.id]=field;
            }            
        });
    }

    /*  Based on the Field Object, creates a FormControl and adds it to the formControls,*/
    addControl(field:FieldBase<any>, collection){
        // console.log("fieldid",field.id+"-"+field.controlType);
        if (collection[field.id]) {
            throw new FormError('Duplicated field id: '+ field.id);
        };
        if(field.controlType=='empty' ) return;
            
        
        if(field.controlType!=Form.controlTypes.itemgroup ){
            //TODO: create more validations for the fields
            //TODO: move to a control creation method          

            const validations = [];            

            if(field.controlType==Form.controlTypes.datepicker){           
                if(field.dateValidations){
                    let mindate;
                    if(field.dateValidations.mindate){
                       if('CURRENT_DAY') mindate=moment().startOf('day');
                    }
                    let maxdate;
                    if(field.dateValidations.maxdate){
                        //moment().startOf('day').add(1,'week'))
                    } 
                    const dateVal=dateValidator('DD-MM-YYYY',mindate,maxdate);
                    validations.push(dateVal);
                    validations.push(Validators.required);
                    
                }               
                
            }else if(field.controlType == 'autocomplete'){
                const objectVal = objectValidator( isDataSetItem, true );
                validations.push( objectVal );
            }
            if( field.required){
                validations.push(Validators.required);
            }
            const control = new FormControl({ value: '' , disabled: false },validations);
            if( field.readonly){
            
                control.disable();                

            }
            collection[field.id] =     control;                   
            
        }
        

        if(field.controlType==='itemgroup' &&  (field as ItemGroup).subItems ){//such recursion :v
            (field as ItemGroup).subItems.forEach(subItem=>{
                this.addControl(subItem,collection);
            })
        }
    }


    getFormGroupData(formGroup:FormGroup,formFields){
        
        const formModel=formGroup.getRawValue();
        let formData={};
        
        Object.keys(formModel).forEach(key=>{
            const val=formModel[key];
            let finalValue='';
            if(val ){
                const field:FieldBase<any> =formFields[key];
                switch(field.controlType){
                    case Form.controlTypes.datepicker:  
                        finalValue=(val as Date).toISOString();
                        break;
                    case Form.controlTypes.autocomplete:
                        finalValue=(val as DataSetItem).value;
                        break;
                    default:                                            
                        if(typeof val !='string')console.log('not a string',key,val);
                        finalValue=(val+'').trim();    
                       
                        break;  
                }                
            }
            
            if(finalValue || finalValue!=='')
                formData[key]=finalValue;
        });

        return formData;       
        
        
    }

    /* For the form editor*/
    addFormControl(formGroup:FormGroup, field: FieldBase<any>){
        let control= field.required? new FormControl(field.value, Validators.required)
        :    new FormControl(field.value); 
        formGroup.addControl(field.id,control);        
    }




}

