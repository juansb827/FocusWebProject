import {  FieldBase} from './field-base';
export class Form{
    id: String;
    fields: FieldBase<any>[];

    constructor(id:String, fields:FieldBase<any>[]){
        this.id=id;
        this.fields=fields;
    }
}