import { Injectable }       from '@angular/core';
import { Form }       from './form';
import { FieldBase }       from './field-base';

// Todo: get from a remote source of forms metadata
  // Todo: make asynchronous

let forms={
    "form1": new Form("form1", "Form1", [
        new FieldBase<String>({value:"DefaultData",id:"001",required:true,label:"Campo1"}),
        new FieldBase<String>({value:"DefaultData",id:"002",label:"Campo1"})
    ] )
    /*,
     "form2": new Form("form2",  [
        new FieldBase<String>({value:"campo1",id:"001"}),
        new FieldBase<String>({value:"campo2",id:"002"}),
        new FieldBase<String>({value:"campo3",id:"003"}),
        new FieldBase<String>({value:"campo4",id:"004"})
    ] ),
     "form3": new Form("form3",  [
        new FieldBase<String>({value:"campo1",id:"001"}),
        new FieldBase<String>({value:"campo2",id:"002"}),
        new FieldBase<String>({value:"campo3",id:"003"}),
        new FieldBase<String>({value:"campo4",id:"004"}),
        new FieldBase<String>({value:"campo5",id:"005"})
    ]) */
    
}
@Injectable()
export class FormService{    
    getForm(formId):Form{
        return forms[formId];
    }

    


}