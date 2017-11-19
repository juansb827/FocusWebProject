import { Injectable }       from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
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

let grupos:DataSet={
  items : [
      { value: "GP1", label: "GRUPO 1" },
      { value: "GP2", label: "GRUPO 2" }
  ]
  
}

let datasets={
    lineas : lineas,
    ciudades: ciudades,
    tiposTurno: tiposTurno,
    tiposCarga: tiposCarga,
    grupos: grupos

}

@Injectable()
export class FormService{    
    
  constructor(private http:HttpClient){}

    getForm(formId):Observable<Form>{
      return this.http.get<Form>('http://localhost:3000/forms/inspeccion001');
      //return Observable.of(form4);
        /*
        return Observable.create(observer=>{
         observer.next(form4);
            // observer.complete();
            
        });
        */
       //console.log("djskla",JSON.stringify(forms[formId]));
        //forms[formId];
    }

    getDataSet(datasetName):Observable<DataSet>{
      if(datasetName=='lineas') return this.http.get<DataSet>('http://localhost:3000/datasets/dsd');
      return Observable.of(datasets[datasetName]);
      
    }

    saveFormData(formData):Observable<any>{
      return Observable.of('');
     // return this.http.post('http://localhost:3000/forms',formData);
    }

    getFieldQuery(field:FieldBase<any>,formData):Observable<any>{
        const query=field.triggers.query;
        let Params = new HttpParams();
        Params=Params.append(field.id, formData[field.id]); //91111121

        return this.http.get<Form>('http://localhost:3000/queries/'+query,{
            params: Params
        });
        /*
        return Observable.of({
            cedulaConductor: 888,
            nombreConductor:"RANI RANENSES",
            celularConductor: 123810938109,
            placaVehiculo : "BHR876",
            empresaTransporte : "EMPRESA2KLÑ"
        });
        */
    }

    


}

var form4:Form=
  {
    "id": "form2",
    "title": "Turno - Ingreso de Contenedores",
    "columns": 12,
    "rows": 4,
    "fields": [
        {
            "value": "TB",
            "id": "tipoDocTurno",
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
            "id": "fechaTurno",
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
            "id": "numTurno",
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
            "id": "patio",
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
            "id": "usoLogico",
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
            "datasetName": "grupos",
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
            "id": "contenedor",
            "label": "",
            "name": "Contenedor",
            "required": false,
            "order": 1,
            "controlType": "textbox",
            "maxLength": 14,
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
                    "id": "tipoContenedor",
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
                    "id": "tamano",
                    "label": "",
                    "name": "tamanoContenedor",
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
                    "id": "codIsoContenedor",
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
                    "id": "pesoMaximoContenedor",
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
                    "id": "taraContenedor",
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
            "id": "cedulaConductor",
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
            "id": "nombreConductor",
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
            "id": "celularConductor",
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
            "id": "empresaTransporte",
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
            "id": "placaVehiculo",
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
            "id": "nitClienteCarga",
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
            "id": "observaciones",
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
            "id": "numeroBl",
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
            "id": "contratoConmodato",
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
            "id": "motonave",
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
            "id": "viaje",
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
            "id": "sellos",
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
            "id": "detalleCarga",
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
            "id": "pesoCarga",
            "label": "",
            "name": "pesoCarga",
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
            "id": "pesoCargaPuerto",
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
            "id": "pesoCargaBascula",
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
            "id": "puertoDestino",
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
            "id": "fechaArriboPto",
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
    ]
}

