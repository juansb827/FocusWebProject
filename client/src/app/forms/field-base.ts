export class FieldBase<T>{
  controlType: string;
  id: string;
  label: string;
  name: string;
  value?;
  required?: boolean;
  order?: number;
  
  placeholder?: string;
  datasetName? : string;
  maxLength? :number;
  subItems?: FieldBase<any>[];

  appearance?: {
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
    colspan?: number,
    
  } = {}) {
    
    this.value = options.value || '';    
    this.id = options.id || options.name || '';
    this.label = options.label || '';
    this.name= options.name || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.placeholder = options.placeholder || options.name || ''; 
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
  
  constructor(options: {},subItems:FieldBase<any>[]) {    
    super(options);
    this.subItems=subItems;
    
  }
}
export class Textbox extends FieldBase<String>{
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

export class Dropdown extends FieldBase<String>{
  controlType = 'dropdown';
  constructor(options: {} = {},datasetName) {
    super(options);
    this.datasetName=datasetName;
  }

}

export class Autocomplete extends FieldBase<String>{
  controlType = 'autocomplete';
  
  constructor(options: {} = {}, datasetName) {
    super(options);
    this.datasetName = datasetName;
  }

}

export class Radiogroup extends FieldBase<String>{
  controlType = 'radioGroup';
  
  constructor(options: {} = {}, datasetName) {
    super(options);
    this.datasetName = datasetName;
  }

}