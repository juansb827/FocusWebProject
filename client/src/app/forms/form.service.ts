import { Injectable }       from '@angular/core';
import { Form }       from './form';
import { FieldBase, TextboxField,DropdownField,Autocomplete }       from './field-base';

// Todo: get from a remote source of forms metadata
  // Todo: make asynchronous

let forms={
    "form1": new Form("form1", "Form1", [
        new Autocomplete({value:"",id:"065",required:false,label:"Campo1",placeholder:"Campo1"}, ["dsa","sdaf"]),
        new Autocomplete({value:"",id:"043",required:true,label:"Campo1",placeholder:"Campo2"}, ["nepe","tugfa","dsa","sdaf","pepe"]),
        new TextboxField({value:"",id:"001",required:true,label:"Campo1",placeholder:"Campo3"},2,2),
        new TextboxField({value:"",id:"007",required:true,label:"Campo1",placeholder:"Campo4"},3,3),
        new TextboxField({value:"",id:"008",required:true,label:"Campo1",placeholder:"Campo5"}),
        new DropdownField({value:"",id:"002",label:"Campo1",placeholder:"Campo6"}),
        new TextboxField({value:"",id:"003",required:true,label:"Campo1",placeholder:"Campo7"}),
        new DropdownField({value:"",id:"004",label:"Campo1",placeholder:"Campo8"})
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