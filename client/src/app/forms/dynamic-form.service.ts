import { Injectable }       from '@angular/core';
import { Form }       from './form';
import { FieldBase }       from './field-base';

// Todo: get from a remote source of forms metadata
  // Todo: make asynchronous

let forms={
    "form1": new Form("form1",  [
        new FieldBase<String>({value:"campo1"}),
        new FieldBase<String>({value:"campo2"})
    ] ),
     "form2": new Form("form2",  [
        new FieldBase<String>({value:"campo1"}),
        new FieldBase<String>({value:"campo2"}),
        new FieldBase<String>({value:"campo3"}),
        new FieldBase<String>({value:"campo4"})
    ] ),
     "form3": new Form("form3",  [
        new FieldBase<String>({value:"campo1"}),
        new FieldBase<String>({value:"campo2"}),
        new FieldBase<String>({value:"campo3"}),
        new FieldBase<String>({value:"campo4"}),
        new FieldBase<String>({value:"campo5"})
    ] )
    
}
@Injectable()
export class DynamicFormService{    
    getForm(formId):Form{
        return forms[formId];
    }

    


}