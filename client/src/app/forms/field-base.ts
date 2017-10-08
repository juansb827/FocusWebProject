export class FieldBase<T>{ //todo col and row span
  value: T;
  id: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  placeholder: string;

  appearance: any;


  constructor(options: {
      value?: T,
      id?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string,
      placeholder?: string
    } = {}) {
    this.value = options.value;
    this.id = options.id || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    
    this.placeholder= options.placeholder;      
    this.appearance={};
    this.appearance.colspan=1; 
    this.appearance.rowspan=1;
  }
}

export class TextboxField extends FieldBase<String>{
  controlType = 'textbox';
  
  constructor(options: {},cols?,rows?){
      super(options); 
      this.appearance.colspan=cols;    
      this.appearance.rowspan=rows;    
      
  }

}

export class DropdownField extends FieldBase<String>{
  controlType = 'dropdown';
  constructor(options: {} ={}){
      super(options);        
  }

}

export class Autocomplete extends FieldBase<String>{
  controlType = 'autocomplete';
  optionList:any[];
  constructor(options: {} ={},optionList: any[]){
      super(options);        
      this.optionList=optionList;
  }

}