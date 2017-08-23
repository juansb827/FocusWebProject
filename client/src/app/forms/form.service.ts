import { Injectable }       from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class FormService{
    //TODO create classes like in the docs example
    getFields(){
        return ['campo1','campo2'];
    }

    toFormGroup(){
        const fields=this.getFields();
        let controls: any={};
        fields.forEach(field=>{
            controls[field]= new FormControl(field);
        });
        return new FormGroup(controls);
    }


}