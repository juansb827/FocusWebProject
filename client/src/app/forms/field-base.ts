export class FieldBase<T>{ //todo col and row span
  value: T;
  id: string;
  label: string;
  name: string;
  required: boolean;
  order: number;
  controlType: string;
  placeholder: string;
  

  appearance: {
    colspan:number,
    rowspan: number,
    visible: boolean
  };


  constructor(options: {
    value?: T,
    id?: string,
    label?: string,
    name?: string,
    required?: boolean,
    order?: number,
    controlType?: string,
    placeholder?: string,
    rowspan?: number,
    colspan?: number
  } = {}) {
    
    this.value = options.value;
    this.id = options.id || options.name || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.placeholder = options.placeholder || options.name; 
    this.appearance={
      colspan:options.colspan || 1,
      rowspan:options.rowspan || 1,
      visible:true    
    }   
  
  }
}
export class EmptySpace extends FieldBase<null>{
  controlType = 'empty';
  constructor(options: {}) {    
    super(options);
    this.appearance.visible=false;
    
  }
}
export class ItemGroup extends FieldBase<null>{
  controlType = 'itemgroup';
  subItems: FieldBase<any>[];
  constructor(options: {},subItems:FieldBase<any>[]) {    
    super(options);
    this.subItems=subItems;
    
  }
}
export class TextboxField extends FieldBase<String>{
  controlType = 'textbox';

  constructor(options: {}) {
    super(options);
  }
}


export class TextArea extends FieldBase<String>{
  controlType = 'textarea';
  constructor(options: {}) {
    super(options);
  }
}

export class DropdownField extends FieldBase<String>{
  controlType = 'dropdown';
  constructor(options: {} = {}) {
    super(options);
  }

}

export class Autocomplete extends FieldBase<String>{
  controlType = 'autocomplete';
  optionList: any[];
  constructor(options: {} = {}, optionList: any[]) {
    super(options);
    this.optionList = optionList;
  }

}

export class RadioGroup extends FieldBase<String>{
  controlType = 'radioGroup';
  optionList: any[];
  constructor(options: {} = {}, optionList: any[]) {
    super(options);
    this.optionList = optionList;
  }

}