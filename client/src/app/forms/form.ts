import {  FieldBase} from './field-base';
export class Form{
    id: String;
    title: String;
    columns: number;
    rows :number;
    fields: FieldBase<any>[];

    constructor(id:String, 
                title:String,
                fields:FieldBase<any>[]){
        this.id=id;
        this.fields=fields;
        this.title=title;
    }
}