import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Form, DataSet, DataSetItem } from './form';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { removeSpacesFromItems,removeSpacesFromDataSet} from './formUtils';
import { FieldBase, Textbox, Dropdown, Autocomplete, Radiogroup, EmptySpace, TextArea, ItemGroup } from './field-base';
import {AppConfig} from './../app.config'
import * as moment from 'moment';


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

  constructor(private http: HttpClient,private appConfig:AppConfig) { }

  getForm(formId): Observable<Form> {    
    console.log("formid",formId);
    if(!formId) return Observable.of(null);
    return this.http.get<Form>(this.appConfig.apiUrl+'/forms/'+formId);
    // return Observable.of(form4);  
  }

  getInitialFormState(formId, formPreset): Observable<any>{
    return this.http.get<any>(this.appConfig.apiUrl+'/forms/'+formId+'/initialState/'+formPreset)
      .map( initialData => {
        if (!initialData) 
          return null;
        let transformedData = {};  
        Object.keys(initialData).forEach( key => {
          if ( typeof initialData[key] === 'object' && initialData[key].type === 'DATE' ){
            transformedData[key] = moment(initialData[key].value);
          }else{
            transformedData[key] = initialData[key];
          }
        });        
        return transformedData;
          
      })    
  }

  getDataSet(datasetName): Observable<DataSet> {

    return this.http.get<DataSet>(this.appConfig.apiUrl+'/datasets/' + datasetName)
    .map(dataset=> removeSpacesFromDataSet(dataset) );
    //return Observable.of(datasets[datasetName]);

  }

  saveFormData(formData,formId): Observable<any> {
    //return Observable.of('');
     return this.http.post(this.appConfig.apiUrl+'/forms/'+formId,formData);
  }

  searchData(term,queryName): Observable<DataSetItem[]> {
    console.log('Searchdata', term);
    if (!term.trim()) {
      // if not search term, return empty array.
      return Observable.of([]);
    }

    let Params = new HttpParams();
    Params = Params.append('search_term', term);
    return this.http.get<DataSetItem[]>(this.appConfig.apiUrl+'/queries/'+queryName, {
      params: Params
    }).map(items=>  removeSpacesFromItems(items));

    



  }

  doFieldQuery(field: FieldBase<any>, formData, form:Form): Observable<any> {
    const query = field.triggers.query;
    let Params = new HttpParams();

    Params = Params.append(field.id, formData[field.id]); //91111121    
    
    return this.http.get<any>(this.appConfig.apiUrl+'/queries/' + query, {
      params: Params
    }).map( data => {      
      if (!data )
        return null;
      //extracts the data that comes from the api, and 
      //renames the keys, so they match the fieldNames of the form
      const transformedData = {};
      //info about then name of the field in the db model
      const fieldsInfo = form.dbconfig.fields; 
      //for each field that the trigger should update
      //look-up it's value according to the retrieved data
      field.triggers.updates.forEach( (updatedField: string) => {
        const fieldInfo = fieldsInfo[updatedField];
        if(!fieldInfo){
          console.log("No field info in dbconfig for field: "+updatedField);  
        }else{
          if (!fieldInfo.sourceField){
            console.log("Field info for: "+updatedField+" does not contain 'sourceField'");    
          }else{
            const value = data[fieldInfo.sourceField] ; 
            transformedData[updatedField] = value;
          }
            
           
        }      
        
      });

      return transformedData;
      
      
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
  