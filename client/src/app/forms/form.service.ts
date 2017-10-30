import { Injectable }       from '@angular/core';
import { Form, DataSet }       from './form';
import { Observable } from 'rxjs/Observable';
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
    new RadioGroup({id:"tipoTurno",value:"",colspan:3},"tiposTurno"),
    new RadioGroup({id:"tipoCarga",value:"",colspan:3},"tiposCarga"),    
    new DropdownField({value:"",id:"002",name:"Grupo",colspan:2}),
    new Autocomplete({value:"",id:"065",name:"Linea Naviera" ,colspan:4}, "lineas"),
    new TextboxField({value:"",name:"Contenedor",colspan:4}),    
    new ItemGroup({colspan:1,rowspan:3},itemGroup),
    new TextboxField({value:"",name:"Cedula Conductor",colspan:2}),
    new TextboxField({value:"",name:"Nombre Conductor",colspan:3}),
    new TextboxField({value:"",name:"Celular",colspan:2}),
    new TextboxField({value:"",name:"Empresa de Transporte",colspan:3}),
    new TextboxField({value:"",name:"Placa Vehiculo",colspan:2}),
    new TextboxField({value:"",name:"Nit Cliente Carga",colspan:4}),    
    new Autocomplete({value:"",id:"434",name:"Sitio de Origen" ,colspan:4}, "ciudades"),
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
    new Autocomplete({value:"",name:"Puerto Destino" ,colspan:4}, "ciudades"),
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

let lineas:DataSet={
    items : [
        { value: "LN1", label: "Linea Naviera1" },
        { value: "LN2", label: "Linea Naviera2" },
        { value: "LN3", label: "Linea Naviera3" },
        { value: "HOM", label: "Homecenter" }

    ]
}

let ciudades:DataSet={
    items : [
        { value: "CTG", label: "Cartagena" },
        { value: "BGT", label: "Bogota" },
        { value: "BQL", label: "Barranquilla" }

    ]
}

let tiposTurno:DataSet={
    items : [
        { value: "ENTRADA", label: "ENTRADA" },
        { value: "SALIDA", label: "SALIDA" }
    ]
    
}

let tiposCarga:DataSet={
    items : [
        { value: "EMPTY", label: "EMPTY" },
        { value: "FULL", label: "FULL" }
    ]
    
}

let datasets={
    lineas : lineas,
    ciudades: ciudades,
    tiposTurno: tiposTurno,
    tiposCarga: tiposCarga

}

@Injectable()
export class FormService{    
    
    getForm(formId):Form{
        form2.columns=12;
        form2.rows=4;
   //     console.log("djskla",JSON.stringify(forms[formId]));
        return forms[formId];
    }

    getDataSet(datasetName):Observable<DataSet>{
        return Observable.create(observer=>{
            observer.next(datasets[datasetName]);
            observer.complete();
        });
    }

    


}





