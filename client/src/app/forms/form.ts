import {  FieldBase} from './field-base';
export class Form{
    id: String;
    title: String;
    columns: number;
    rows :number;
    fields: FieldBase<any>[];
    dbconfig: { fields: any, targetTable: String };

    static readonly  controlTypes={
        empty : 'empty',
        itemgroup: 'itemgroup',
        textbox: 'textbox',
        textarea : 'textarea',
        dropdown : 'dropdown', 
        autocomplete : 'autocomplete',
        radioGroup: 'radioGroup',
        datepicker : 'datepicker',
        textcard : 'textcard'
    }   

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

export function isDataSetItem(object: any): object is DataSetItem{
    return object instanceof Object && 'value' in object && 'label' in object;
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