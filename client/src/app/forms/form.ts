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

export interface DataSetItem{
    value: any;
    label: string;
}

export interface DataSet{
    items: DataSetItem[];
    
}

export class FormError extends Error {
    constructor(m: string) {
        super(m);
        Object.setPrototypeOf(this, FormError.prototype);
    }

}