import { Injectable }       from '@angular/core';
import { Form }       from './form';
import { FieldBase, TextboxField,DropdownField,Autocomplete,RadioGroup,EmptySpace,TextArea, ItemGroup }       from './field-base';

let form3: Form;
form3={
"id": "dsada",
"title": "String",
"columns": 3,
"rows" : 3,
"fields": [{
    "value": "T",
    "id": "string",
    "label": "string",
    "name": "string",
    "required": true,
    "order": 1,    
    "controlType": "textarea",
    "placeholder": "askjdlakj",
    "appearance": {
        "colspan":3,
        "rowspan": 1,
        "visible": true
      }
}]}

let itemGroup=[
    new TextboxField({value:"",name:"Tipo",colspan:"1"}),
    new TextboxField({value:"",name:"Tamaño"}),    
    new TextboxField({value:"",name:"Codigo ISO"}),
    new TextboxField({value:"",name:"Peso Máximo"}),
    new TextboxField({value:"",name:"Tara"})
    
]
// Todo: get from a remote source of forms metadata
  // Todo: make asynchronous
  let form2=new Form("form2", "Turno - Ingreso de Contenedores", [
    new TextboxField({value:"TB",name:"Documento",colspan:2}),
    new TextboxField({value:"2017-05-27",name:"Año-Mes-Dia",colspan:2}),
    new TextboxField({value:"1",name:"Turno",rowspan:1,colspan:1}),
    new TextboxField({value:"1",name:"Patio",rowspan:1,colspan:1}),
    new RadioGroup({value:"",colspan:3},["ENTRADA","SALIDA"]),
    new RadioGroup({value:"",colspan:3},["FULL","EMPTY"]),    
    new DropdownField({value:"",id:"002",name:"Grupo",colspan:2}),
    new Autocomplete({value:"",id:"065",name:"Linea Naviera" ,colspan:4}, ["EVG - Evergreen","PPP - Pepe"]),
    new TextboxField({value:"",name:"Contenedor",colspan:4}),    
    new ItemGroup({colspan:1,rowspan:3},itemGroup),
    new TextboxField({value:"",name:"Cedula Conductor",colspan:2}),
    new TextboxField({value:"",name:"Nombre Conductor",colspan:3}),
    new TextboxField({value:"",name:"Celular",colspan:2}),
    new TextboxField({value:"",name:"Empresa de Transporte",colspan:3}),
    new TextboxField({value:"",name:"Placa Vehiculo",colspan:2}),
    new TextboxField({value:"",name:"Nit Cliente Carga",colspan:4}),    
    new Autocomplete({value:"",id:"065",name:"Sitio de Origen" ,colspan:4}, ["CTG - Cartagena","BGT- Bogota"]),
    new TextArea({value:"",name:"Observaciones",colspan:4,rowspan:1}),
    new TextboxField({value:"",name:"Numero de BL",colspan:2}),
    new TextboxField({value:"",name:"Contrato de Conmodato",colspan:2}),
    new TextboxField({value:"",name:"Motonave",colspan:2}),
    new TextboxField({value:"",name:"Viaje",colspan:2}),    
    new TextboxField({value:"",name:"Sellos",colspan:6}),
    new TextboxField({value:"",name:"Detalle Carga",colspan:6}),
    //new EmptySpace({colspan:3}),
    new TextboxField({value:"",name:"Peso Carga",colspan:2}),
    new TextboxField({value:"",name:"Peso Carga Puerto",colspan:2}),
    new TextboxField({value:"",name:"Peso Carga Bascula",colspan:2}),    
    new Autocomplete({value:"",name:"Puerto Destino" ,colspan:4}, ["CTG - Cartagena","BGT- Bogota"]),
    new TextboxField({value:"",name:"Fecha Arribo Puerto (DD/MM/AAAA)",colspan:4})    


    
] )
let forms={
    "form1": new Form("form1", "Form1", [
        
        new Autocomplete({value:"",id:"065",required:false,label:"Campo1",placeholder:"Campo1"}, ["dsa","sdaf"]),
        new Autocomplete({value:"",id:"043",required:true,label:"Campo1",placeholder:"Campo2"}, ["nepe","tugfa","dsa","sdaf","pepe"]),
        new TextboxField({value:"",id:"001",required:true,label:"Campo1",placeholder:"Campo3"}),
        new TextboxField({value:"",id:"007",required:true,label:"Campo1",placeholder:"Campo4"}),
        new TextboxField({value:"",id:"008",required:true,label:"Campo1",placeholder:"Campo5"}),
        new DropdownField({value:"",id:"002",label:"Campo1",placeholder:"Campo6"}),
        new TextboxField({value:"",id:"003",required:true,label:"Campo1",placeholder:"Campo7"}),
        new DropdownField({value:"",id:"004",label:"Campo1",placeholder:"Campo8"})
        
    ] ),
    "form2": form2
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

//let vari:Form=   {"id":"form2","fields":[{"value":"TB","id":"Documento","label":"","name":"Documento","required":false,"order":1,"controlType":"textbox","placeholder":"Documento","appearance":{"colspan":2,"rowspan":1,"visible":true}},{"value":"2017-05-27","id":"Año-Mes-Dia","label":"","name":"Año-Mes-Dia","required":false,"order":1,"controlType":"textbox","placeholder":"Año-Mes-Dia","appearance":{"colspan":2,"rowspan":1,"visible":true}},{"value":"1","id":"Turno","label":"","name":"Turno","required":false,"order":1,"controlType":"textbox","placeholder":"Turno","appearance":{"colspan":1,"rowspan":1,"visible":true}},{"value":"1","id":"Patio","label":"","name":"Patio","required":false,"order":1,"controlType":"textbox","placeholder":"Patio","appearance":{"colspan":1,"rowspan":1,"visible":true}},{"value":"","id":"","label":"","name":"","required":false,"order":1,"controlType":"radioGroup","placeholder":"","appearance":{"colspan":3,"rowspan":1,"visible":true},"optionList":["ENTRADA","SALIDA"]},{"value":"","id":"","label":"","name":"","required":false,"order":1,"controlType":"radioGroup","placeholder":"","appearance":{"colspan":3,"rowspan":1,"visible":true},"optionList":["FULL","EMPTY"]},{"value":"","id":"002","label":"","name":"Grupo","required":false,"order":1,"controlType":"dropdown","placeholder":"Grupo","appearance":{"colspan":2,"rowspan":1,"visible":true}},{"value":"","id":"065","label":"","name":"Linea Naviera","required":false,"order":1,"controlType":"autocomplete","placeholder":"Linea Naviera","appearance":{"colspan":4,"rowspan":1,"visible":true},"optionList":["EVG - Evergreen","PPP - Pepe"]},{"value":"","id":"Contenedor","label":"","name":"Contenedor","required":false,"order":1,"controlType":"textbox","placeholder":"Contenedor","appearance":{"colspan":4,"rowspan":1,"visible":true}},{"value":"","id":"","label":"","name":"","required":false,"order":1,"controlType":"itemgroup","placeholder":"","appearance":{"colspan":2,"rowspan":3,"visible":true},"subItems":[{"value":"","id":"Tipo","label":"","name":"Tipo","required":false,"order":1,"controlType":"textbox","placeholder":"Tipo","appearance":{"colspan":"1","rowspan":1,"visible":true}},{"value":"","id":"Tamaño","label":"","name":"Tamaño","required":false,"order":1,"controlType":"textbox","placeholder":"Tamaño","appearance":{"colspan":1,"rowspan":1,"visible":true}},{"value":"","id":"Codigo ISO","label":"","name":"Codigo ISO","required":false,"order":1,"controlType":"textbox","placeholder":"Codigo ISO","appearance":{"colspan":1,"rowspan":1,"visible":true}},{"value":"","id":"Peso Máximo","label":"","name":"Peso Máximo","required":false,"order":1,"controlType":"textbox","placeholder":"Peso Máximo","appearance":{"colspan":1,"rowspan":1,"visible":true}},{"value":"","id":"Tara","label":"","name":"Tara","required":false,"order":1,"controlType":"textbox","placeholder":"Tara","appearance":{"colspan":1,"rowspan":1,"visible":true}}]},{"value":"","id":"Cedula Conductor","label":"","name":"Cedula Conductor","required":false,"order":1,"controlType":"textbox","placeholder":"Cedula Conductor","appearance":{"colspan":2,"rowspan":1,"visible":true}},{"value":"","id":"Nombre Conductor","label":"","name":"Nombre Conductor","required":false,"order":1,"controlType":"textbox","placeholder":"Nombre Conductor","appearance":{"colspan":3,"rowspan":1,"visible":true}},{"value":"","id":"Celular","label":"","name":"Celular","required":false,"order":1,"controlType":"textbox","placeholder":"Celular","appearance":{"colspan":2,"rowspan":1,"visible":true}},{"value":"","id":"Empresa de Transporte","label":"","name":"Empresa de Transporte","required":false,"order":1,"controlType":"textbox","placeholder":"Empresa de Transporte","appearance":{"colspan":3,"rowspan":1,"visible":true}},{"value":"","id":"Placa Vehiculo","label":"","name":"Placa Vehiculo","required":false,"order":1,"controlType":"textbox","placeholder":"Placa Vehiculo","appearance":{"colspan":2,"rowspan":1,"visible":true}},{"value":"","id":"Nit Cliente Carga","label":"","name":"Nit Cliente Carga","required":false,"order":1,"controlType":"textbox","placeholder":"Nit Cliente Carga","appearance":{"colspan":4,"rowspan":1,"visible":true}},{"value":"","id":"065","label":"","name":"Sitio de Origen","required":false,"order":1,"controlType":"autocomplete","placeholder":"Sitio de Origen","appearance":{"colspan":4,"rowspan":1,"visible":true},"optionList":["CTG - Cartagena","BGT- Bogota"]},{"value":"","id":"Observaciones","label":"","name":"Observaciones","required":false,"order":1,"controlType":"textarea","placeholder":"Observaciones","appearance":{"colspan":4,"rowspan":1,"visible":true}},{"value":"","id":"Numero de BL","label":"","name":"Numero de BL","required":false,"order":1,"controlType":"textbox","placeholder":"Numero de BL","appearance":{"colspan":2,"rowspan":1,"visible":true}},{"value":"","id":"Contrato de Conmodato","label":"","name":"Contrato de Conmodato","required":false,"order":1,"controlType":"textbox","placeholder":"Contrato de Conmodato","appearance":{"colspan":2,"rowspan":1,"visible":true}},{"value":"","id":"Motonave","label":"","name":"Motonave","required":false,"order":1,"controlType":"textbox","placeholder":"Motonave","appearance":{"colspan":2,"rowspan":1,"visible":true}},{"value":"","id":"Viaje","label":"","name":"Viaje","required":false,"order":1,"controlType":"textbox","placeholder":"Viaje","appearance":{"colspan":2,"rowspan":1,"visible":true}},{"value":"","id":"Sellos","label":"","name":"Sellos","required":false,"order":1,"controlType":"textbox","placeholder":"Sellos","appearance":{"colspan":6,"rowspan":1,"visible":true}},{"value":"","id":"Detalle Carga","label":"","name":"Detalle Carga","required":false,"order":1,"controlType":"textbox","placeholder":"Detalle Carga","appearance":{"colspan":6,"rowspan":1,"visible":true}},{"value":"","id":"Peso Carga","label":"","name":"Peso Carga","required":false,"order":1,"controlType":"textbox","placeholder":"Peso Carga","appearance":{"colspan":2,"rowspan":1,"visible":true}},{"value":"","id":"Peso Carga Puerto","label":"","name":"Peso Carga Puerto","required":false,"order":1,"controlType":"textbox","placeholder":"Peso Carga Puerto","appearance":{"colspan":2,"rowspan":1,"visible":true}},{"value":"","id":"Peso Carga Bascula","label":"","name":"Peso Carga Bascula","required":false,"order":1,"controlType":"textbox","placeholder":"Peso Carga Bascula","appearance":{"colspan":2,"rowspan":1,"visible":true}},{"value":"","id":"Puerto Destino","label":"","name":"Puerto Destino","required":false,"order":1,"controlType":"autocomplete","placeholder":"Puerto Destino","appearance":{"colspan":4,"rowspan":1,"visible":true},"optionList":["CTG - Cartagena","BGT- Bogota"]},{"value":"","id":"Fecha Arribo Puerto (DD/MM/AAAA)","label":"","name":"Fecha Arribo Puerto (DD/MM/AAAA)","required":false,"order":1,"controlType":"textbox","placeholder":"Fecha Arribo Puerto (DD/MM/AAAA)","appearance":{"colspan":4,"rowspan":1,"visible":true}}],"title":"Turno - Ingreso de Contenedores","columns":12,"rows":4};
let var2:FieldBase<any>={"value":"TB","id":"Documento","label":"","name":"Documento","required":false,"order":1,"controlType":"textbox","placeholder":"Documento","appearance":{"colspan":2,"rowspan":1,"visible":true}};
@Injectable()
export class FormService{    
    
    getForm(formId):Form{
        form2.columns=12;
        form2.rows=4;
        console.log("djskla",JSON.stringify(forms[formId]));
        return forms[formId];
    }

    


}





