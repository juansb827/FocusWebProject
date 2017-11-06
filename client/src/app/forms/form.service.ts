import { Injectable }       from '@angular/core';
import { Form, DataSet }       from './form';
import { Observable } from 'rxjs/Observable';

import { FieldBase, Textbox,Dropdown,Autocomplete,Radiogroup,EmptySpace,TextArea, ItemGroup }       from './field-base';

let form3: Form;

let itemGroup=[
    new Textbox({value:"",name:"Tipo",colspan:1}),
    new Textbox({value:"",name:"Tamaño"}),    
    new Textbox({value:"",name:"Codigo ISO"}),
    new Textbox({value:"",name:"Peso Máximo"}),
    new Textbox({value:"",name:"Tara"})
    
]
// Todo: get from a remote source of forms metadata
  // Todo: make asynchronous
  let form2=new Form("form2", "Turno - Ingreso de Contenedores", [
    new Textbox({value:"TB",name:"Documento",colspan:2}),
    new Textbox({value:"2017-05-27",name:"Año-Mes-Dia",colspan:2}),
    new Textbox({value:"1",name:"Turno",rowspan:1,colspan:1}),
    new Textbox({value:"1",name:"Patio",rowspan:1,colspan:1}),
    new Radiogroup({id:"tipoTurno",value:"",colspan:3},"tiposTurno"),
    new Radiogroup({id:"tipoCarga",value:"",colspan:3},"tiposCarga"),    
 //   new Dropdown({value:"",id:"002",name:"Grupo",colspan:2}),
    new Autocomplete({value:"",id:"065",name:"Linea Naviera" ,colspan:4}, "lineas"),
    new Textbox({value:"",name:"Contenedor",colspan:4}),    
    new ItemGroup({colspan:1,rowspan:3},itemGroup),
    new Textbox({value:"",name:"Cedula Conductor",colspan:2}),
    new Textbox({value:"",name:"Nombre Conductor",colspan:3}),
    new Textbox({value:"",name:"Celular",colspan:2}),
    new Textbox({value:"",name:"Empresa de Transporte",colspan:3}),
    new Textbox({value:"",name:"Placa Vehiculo",colspan:2}),
    new Textbox({value:"",name:"Nit Cliente Carga",colspan:4}),    
    new Autocomplete({value:"",id:"434",name:"Sitio de Origen" ,colspan:4}, "ciudades"),
    new TextArea({value:"",name:"Observaciones",colspan:4,rowspan:1}),
    new Textbox({value:"",name:"Numero de BL",colspan:2}),
    new Textbox({value:"",name:"Contrato de Conmodato",colspan:2}),
    new Textbox({value:"",name:"Motonave",colspan:2}),
    new Textbox({value:"",name:"Viaje",colspan:2}),    
    new Textbox({value:"",name:"Sellos",colspan:6}),
    new Textbox({value:"",name:"Detalle Carga",colspan:6}),
    //new EmptySpace({colspan:3}),
    new Textbox({value:"",name:"Peso Carga",colspan:2}),
    new Textbox({value:"",name:"Peso Carga Puerto",colspan:2}),
    new Textbox({value:"",name:"Peso Carga Bascula",colspan:2}),    
    new Autocomplete({value:"",name:"Puerto Destino" ,colspan:4}, "ciudades"),
    new Textbox({value:"",name:"Fecha Arribo Puerto (DD/MM/AAAA)",colspan:4})    


    
] )
let forms={};
  

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
    
    getForm(formId):Observable<Form>{
        return Observable.create(observer=>{
            observer.next(form4);
            observer.complete();
        });
        
       //console.log("djskla",JSON.stringify(forms[formId]));
        //forms[formId];
    }

    getDataSet(datasetName):Observable<DataSet>{
      return Observable.of(datasets[datasetName]);
      
    }

    saveFormData(formData:object):Observable<any>{
      return Observable.create(observer=>{
        observer.next();
        observer.error();
        observer.complete();
    });
    }

    


}

var form4:Form=
{
    "id": "form2",
    "fields": [
      {
        "value": "TB",
        "id": "Documento",
        "label": "",
        "name": "Documento",
        "required": false,
        "order": 1,
        "controlType": "textbox",
        "placeholder": "Documento",
        "appearance": {
          "colspan": 2,
          "rowspan": 1,
          "visible": true
        }
      },
      {
        "value": "2017-05-27",
        "id": "Año-Mes-Dia",
        "label": "",
        "name": "Año-Mes-Dia",
        "required": false,
        "order": 1,
        "controlType": "textbox",
        "placeholder": "Año-Mes-Dia",
        "appearance": {
          "colspan": 2,
          "rowspan": 1,
          "visible": true
        }
      },
      {
        "value": "1",
        "id": "Turno",
        "label": "",
        "name": "Turno",
        "required": false,
        "order": 1,
        "controlType": "textbox",
        "placeholder": "Turno",
        "appearance": {
          "colspan": 1,
          "rowspan": 1,
          "visible": true
        }
      },
      {
        "value": "1",
        "id": "Patio",
        "label": "",
        "name": "Patio",
        "required": false,
        "order": 1,
        "controlType": "textbox",
        "placeholder": "Patio",
        "appearance": {
          "colspan": 1,
          "rowspan": 1,
          "visible": true
        }
      },
      {
        "value": "",
        "id": "tipoTurno",
        "label": "",
        "name": "",
        "required": false,
        "order": 1,
        "controlType": "radioGroup",
        "placeholder": "",
        "appearance": {
          "colspan": 3,
          "rowspan": 1,
          "visible": true
        },
        "datasetName": "tiposTurno"
      },
      {
        "value": "",
        "id": "tipoCarga",
        "label": "",
        "name": "",
        "required": false,
        "order": 1,
        "controlType": "radioGroup",
        "placeholder": "",
        "appearance": {
          "colspan": 3,
          "rowspan": 1,
          "visible": true
        },
        "datasetName": "tiposCarga"
      },
      {
        "value": "",
        "id": "grupo",
        "label": "",
        "name": "Grupo",
        "required": false,
        "order": 1,
        "controlType": "dropdown",
        "placeholder": "Grupo",
        "datasetName": "tiposCarga",
        "appearance": {
          "colspan": 2,
          "rowspan": 1,
          "visible": true
        }
      },
      {
        "value": "",
        "id": "lineaNaviera",
        "label": "",
        "name": "Linea Naviera",
        "required": false,
        "order": 1,
        "controlType": "autocomplete",
        "placeholder": "Linea Naviera",
        "appearance": {
          "colspan": 4,
          "rowspan": 1,
          "visible": true
        },
        "datasetName": "lineas"
      },
      {
        "value": "",
        "id": "Contenedor",
        "label": "",
        "name": "Contenedor",
        "required": false,
        "order": 1,
        "controlType": "textbox",
        "maxLength" : 14,
        "placeholder": "Contenedor",
        "appearance": {
          "colspan": 4,
          "rowspan": 1,
          "visible": true
        }
      },
      {
        
        "id": "",
        "label": "",
        "name": "",        
        "order": 1,
        "controlType": "itemgroup",
        "placeholder": "",
        "appearance": {
          "colspan": 2,
          "rowspan": 4,
          "visible": true
        },
        "subItems": [
          {
            "value": "",
            "id": "Tipo",
            "label": "",
            "name": "Tipo",
            "required": false,
            "order": 1,
            "controlType": "textbox",
            "placeholder": "Tipo",
            "appearance": {
              "colspan": 1,
              "rowspan": 1,
              "visible": true
            }
          },
          {
            "value": "",
            "id": "Tamaño",
            "label": "",
            "name": "Tamaño",
            "required": false,
            "order": 1,
            "controlType": "textbox",
            "placeholder": "Tamaño",
            "appearance": {
              "colspan": 1,
              "rowspan": 1,
              "visible": true
            }
          },
          {
            "value": "",
            "id": "Codigo ISO",
            "label": "",
            "name": "Codigo ISO",
            "required": false,
            "order": 1,
            "controlType": "textbox",
            "placeholder": "Codigo ISO",
            "appearance": {
              "colspan": 1,
              "rowspan": 1,
              "visible": true
            }
          },
          {
            "value": "",
            "id": "Peso Máximo",
            "label": "",
            "name": "Peso Máximo",
            "required": false,
            "order": 1,
            "controlType": "textbox",
            "placeholder": "Peso Máximo",
            "appearance": {
              "colspan": 1,
              "rowspan": 1,
              "visible": true
            }
          },
          {
            "value": "",
            "id": "Tara",
            "label": "",
            "name": "Tara",
            "required": false,
            "order": 1,
            "controlType": "textbox",
            "placeholder": "Tara",
            "appearance": {
              "colspan": 1,
              "rowspan": 1,
              "visible": true
            }
          }
        ]
      },
      {
        "value": "",
        "id": "Cedula Conductor",
        "label": "",
        "name": "Cedula Conductor",
        "required": false,
        "order": 1,
        "controlType": "textbox",
        "placeholder": "Cedula Conductor",
        "appearance": {
          "colspan": 2,
          "rowspan": 1,
          "visible": true
        }
      },
      {
        "value": "",
        "id": "Nombre Conductor",
        "label": "",
        "name": "Nombre Conductor",
        "required": false,
        "order": 1,
        "controlType": "textbox",
        "placeholder": "Nombre Conductor",
        "appearance": {
          "colspan": 3,
          "rowspan": 1,
          "visible": true
        }
      },
      {
        "value": "",
        "id": "Celular",
        "label": "",
        "name": "Celular",
        "required": false,
        "order": 1,
        "controlType": "textbox",
        "placeholder": "Celular",
        "appearance": {
          "colspan": 2,
          "rowspan": 1,
          "visible": true
        }
      },
      {
        "value": "",
        "id": "Empresa de Transporte",
        "label": "",
        "name": "Empresa de Transporte",
        "required": false,
        "order": 1,
        "controlType": "textbox",
        "placeholder": "Empresa de Transporte",
        "appearance": {
          "colspan": 3,
          "rowspan": 1,
          "visible": true
        }
      },
      {
        "value": "",
        "id": "Placa Vehiculo",
        "label": "",
        "name": "Placa Vehiculo",
        "required": false,
        "order": 1,
        "controlType": "textbox",
        "placeholder": "Placa Vehiculo",
        "appearance": {
          "colspan": 2,
          "rowspan": 1,
          "visible": true
        }
      },
      {
        "value": "",
        "id": "Nit Cliente Carga",
        "label": "",
        "name": "Nit Cliente Carga",
        "required": false,
        "order": 1,
        "controlType": "textbox",
        "placeholder": "Nit Cliente Carga",
        "appearance": {
          "colspan": 4,
          "rowspan": 1,
          "visible": true
        }
      },
      {
        "value": "",
        "id": "sitioOrigen",
        "label": "",
        "name": "Sitio de Origen",
        "required": false,
        "order": 1,
        "controlType": "autocomplete",
        "placeholder": "Sitio de Origen",
        "appearance": {
          "colspan": 4,
          "rowspan": 1,
          "visible": true
        },
        "datasetName": "ciudades"
      },
      {
        "value": "",
        "id": "Observaciones",
        "label": "",
        "name": "Observaciones",
        "required": false,
        "order": 1,
        "controlType": "textarea",
        "placeholder": "Observaciones",
        "appearance": {
          "colspan": 4,
          "rowspan": 1,
          "visible": true
        }
      },
      {
        "value": "",
        "id": "Numero de BL",
        "label": "",
        "name": "Numero de BL",
        "required": false,
        "order": 1,
        "controlType": "textbox",
        "placeholder": "Numero de BL",
        "appearance": {
          "colspan": 2,
          "rowspan": 1,
          "visible": true
        }
      },
      {
        "value": "",
        "id": "Contrato de Conmodato",
        "label": "",
        "name": "Contrato de Conmodato",
        "required": false,
        "order": 1,
        "controlType": "textbox",
        "placeholder": "Contrato de Conmodato",
        "appearance": {
          "colspan": 2,
          "rowspan": 1,
          "visible": true
        }
      },
      {
        "value": "",
        "id": "Motonave",
        "label": "",
        "name": "Motonave",
        "required": false,
        "order": 1,
        "controlType": "textbox",
        "placeholder": "Motonave",
        "appearance": {
          "colspan": 2,
          "rowspan": 1,
          "visible": true
        }
      },
      {
        "value": "",
        "id": "Viaje",
        "label": "",
        "name": "Viaje",
        "required": false,
        "order": 1,
        "controlType": "textbox",
        "placeholder": "Viaje",
        "appearance": {
          "colspan": 2,
          "rowspan": 1,
          "visible": true
        }
      },
      {
        "value": "",
        "id": "Sellos",
        "label": "",
        "name": "Sellos",
        "required": false,
        "order": 1,
        "controlType": "textbox",
        "placeholder": "Sellos",
        "appearance": {
          "colspan": 6,
          "rowspan": 1,
          "visible": true
        }
      },
      {
        "value": "",
        "id": "Detalle Carga",
        "label": "",
        "name": "Detalle Carga",
        "required": false,
        "order": 1,
        "controlType": "textbox",
        "placeholder": "Detalle Carga",
        "appearance": {
          "colspan": 6,
          "rowspan": 1,
          "visible": true
        }
      },
      {
        "value": "",
        "id": "Peso Carga",
        "label": "",
        "name": "Peso Carga",
        "required": false,
        "order": 1,
        "controlType": "textbox",
        "placeholder": "Peso Carga",
        "appearance": {
          "colspan": 2,
          "rowspan": 1,
          "visible": true
        }
      },
      {
        "value": "",
        "id": "Peso Carga Puerto",
        "label": "",
        "name": "Peso Carga Puerto",
        "required": false,
        "order": 1,
        "controlType": "textbox",
        "placeholder": "Peso Carga Puerto",
        "appearance": {
          "colspan": 2,
          "rowspan": 1,
          "visible": true
        }
      },
      {
        "value": "",
        "id": "Peso Carga Bascula",
        "label": "",
        "name": "Peso Carga Bascula",
        "required": false,
        "order": 1,
        "controlType": "textbox",
        "placeholder": "Peso Carga Bascula",
        "appearance": {
          "colspan": 2,
          "rowspan": 1,
          "visible": true
        }
      },
      {
        "value": "",
        "id": "Puerto Destino",
        "label": "",
        "name": "Puerto Destino",
        "required": false,
        "order": 1,
        "controlType": "autocomplete",
        "placeholder": "Puerto Destino",
        "appearance": {
          "colspan": 4,
          "rowspan": 1,
          "visible": true
        },
        "datasetName": "ciudades"
      },
      {
        "value": "",
        "id": "Fecha Arribo Puerto (DD/MM/AAAA)",
        "label": "",
        "name": "Fecha Arribo Puerto (DD/MM/AAAA)",
        "required": false,
        "order": 1,
        "controlType": "textbox",
        "placeholder": "Fecha Arribo Puerto (DD/MM/AAAA)",
        "appearance": {
          "colspan": 4,
          "rowspan": 1,
          "visible": true
        }
      }
    ],
    "title": "Turno - Ingreso de Contenedores",
    "columns": 12,
    "rows": 4
  }