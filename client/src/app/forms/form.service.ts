import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Form, DataSet, DataSetItem } from './form';
import { Observable } from 'rxjs/Observable';
import { removeSpacesFromItems,removeSpacesFromDataSet} from './formUtils';
import { FieldBase, Textbox, Dropdown, Autocomplete, Radiogroup, EmptySpace, TextArea, ItemGroup } from './field-base';

let form3: Form;

let itemGroup = [
  new Textbox({ value: '', name: 'Tipo', colspan: 1 }),
  new Textbox({ value: '', name: 'Tamaño' }),
  new Textbox({ value: '', name: 'Codigo ISO' }),
  new Textbox({ value: '', name: 'Peso Máximo' }),
  new Textbox({ value: '', name: 'Tara' })

]
// Todo: get from a remote source of forms metadata
// Todo: make asynchronous
let form2 = new Form('form2', 'Turno - Ingreso de Contenedores', [
  new Textbox({ value: 'TB', name: 'Documento', colspan: 2 }),
  new Textbox({ value: '2017-05-27', name: 'Año-Mes-Dia', colspan: 2 }),
  new Textbox({ value: '1', name: 'Turno', rowspan: 1, colspan: 1 }),
  new Textbox({ value: '1', name: 'Patio', rowspan: 1, colspan: 1 }),
  new Radiogroup({ id: 'tipoTurno', value: '', colspan: 3 }, 'tiposTurno'),
  new Radiogroup({ id: 'tipoCarga', value: '', colspan: 3 }, 'tiposCarga'),
  //   new Dropdown({value:'',id:'002',name:'Grupo',colspan:2}),
  new Autocomplete({ value: '', id: '065', name: 'Linea Naviera', colspan: 4 }, 'lineas'),
  new Textbox({ value: '', name: 'Contenedor', colspan: 4 }),
  new ItemGroup({ colspan: 1, rowspan: 3 }, itemGroup),
  new Textbox({ value: '', name: 'Cedula Conductor', colspan: 2 }),
  new Textbox({ value: '', name: 'Nombre Conductor', colspan: 3 }),
  new Textbox({ value: '', name: 'Celular', colspan: 2 }),
  new Textbox({ value: '', name: 'Empresa de Transporte', colspan: 3 }),
  new Textbox({ value: '', name: 'Placa Vehiculo', colspan: 2 }),
  new Textbox({ value: '', name: 'Nit Cliente Carga', colspan: 4 }),
  new Autocomplete({ value: '', id: '434', name: 'Sitio de Origen', colspan: 4 }, 'ciudades'),
  new TextArea({ value: '', name: 'Observaciones', colspan: 4, rowspan: 1 }),
  new Textbox({ value: '', name: 'Numero de BL', colspan: 2 }),
  new Textbox({ value: '', name: 'Contrato de Conmodato', colspan: 2 }),
  new Textbox({ value: '', name: 'Motonave', colspan: 2 }),
  new Textbox({ value: '', name: 'Viaje', colspan: 2 }),
  new Textbox({ value: '', name: 'Sellos', colspan: 6 }),
  new Textbox({ value: '', name: 'Detalle Carga', colspan: 6 }),
  //new EmptySpace({colspan:3}),
  new Textbox({ value: '', name: 'Peso Carga', colspan: 2 }),
  new Textbox({ value: '', name: 'Peso Carga Puerto', colspan: 2 }),
  new Textbox({ value: '', name: 'Peso Carga Bascula', colspan: 2 }),
  new Autocomplete({ value: '', name: 'Puerto Destino', colspan: 4 }, 'ciudades'),
  new Textbox({ value: '', name: 'Fecha Arribo Puerto (DD/MM/AAAA)', colspan: 4 })



])
let forms = {};


let lineas: DataSet = {
  items: [
    { value: 'LN1', label: 'Linea Naviera1' },
    { value: 'LN2', label: 'Linea Naviera2' },
    { value: 'LN3', label: 'Linea Naviera3' },
    { value: 'HOM', label: 'Homecenter' }

  ]
}

let ciudades: DataSet = {
  items: [
    { value: 'CTG', label: 'Cartagena' },
    { value: 'BGT', label: 'Bogota' },
    { value: 'BQL', label: 'Barranquilla' }

  ]
}

let tiposTurno: DataSet = {
  items: [
    { value: 'ENTRADA', label: 'ENTRADA' },
    { value: 'SALIDA', label: 'SALIDA' }
  ]

}

let tiposCarga: DataSet = {
  items: [
    { value: 'EMPTY', label: 'EMPTY' },
    { value: 'FULL', label: 'FULL' }
  ]

}

let grupos: DataSet = {
  items: [
    { value: 'GP1', label: 'GRUPO 1' },
    { value: 'GP2', label: 'GRUPO 2' }
  ]

}

let datasets = {
  lineas: lineas,
  ciudades: ciudades,
  tiposTurno: tiposTurno,
  tiposCarga: tiposCarga,
  grupos: grupos

}

@Injectable()
export class FormService {

  constructor(private http: HttpClient) { }

  getForm(formId): Observable<Form> {
    return this.http.get<Form>('http://localhost:3000/forms/inspeccion001');
    // return Observable.of(form4);  
  }

  getDataSet(datasetName): Observable<DataSet> {

    return this.http.get<DataSet>('http://localhost:3000/datasets/' + datasetName)
    .map(dataset=> removeSpacesFromDataSet(dataset) );
    //return Observable.of(datasets[datasetName]);

  }

  saveFormData(formData): Observable<any> {
    //return Observable.of('');
     return this.http.post('http://localhost:3000/forms',formData);
  }

  searchData(term,queryName): Observable<DataSetItem[]> {
    console.log('Searchdata', term);
    if (!term.trim()) {
      // if not search term, return empty array.
      return Observable.of([]);
    }

    let Params = new HttpParams();
    Params = Params.append('search_term', term);
    return this.http.get<DataSetItem[]>('http://localhost:3000/queries/'+queryName, {
      params: Params
    }).map(items=>  removeSpacesFromItems(items));

    



  }

  doFieldQuery(field: FieldBase<any>, formData): Observable<any> {
    const query = field.triggers.query;
    let Params = new HttpParams();
    Params = Params.append(field.id, formData[field.id]); //91111121

    return this.http.get<Form>('http://localhost:3000/queries/' + query, {
      params: Params
    });
    /*
    return Observable.of({
        cedulaConductor: 888,
        nombreConductor:'RANI RANENSES',
        celularConductor: 123810938109,
        placaVehiculo : 'BHR876',
        empresaTransporte : 'EMPRESA2KLÑ'
    });
    */
  }




}

var form4: Form =null;
  