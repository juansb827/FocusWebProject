/* Component that displays a DynamicForm */
import { Component, Input, OnInit, OnDestroy, AfterViewInit, ViewChild, ComponentFactoryResolver, OnChanges } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Form } from './../forms/form'
import * as moment from 'moment';
import { FormService } from '../forms/form.service'
import { MenuService } from '../menu/menu.service'

@Component({  //<ng-template ad-host></ng-template>
  selector: 'content-displayer',
  template:
  `<div style="text-align:center;">
    <dynamic-form *ngIf="form" [form]="form" [initialData]="dummy">
    </dynamic-form>
    <div *ngIf="!form">Cargando formulario...</div>
  </div>`,
  styleUrls: []
})
/*
   
*/


//TODO move outside of my form muodule, this componenet uses FormModule but should not be part of it
//
export class ContentDisplayerComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  @Input() contentId: String;
  //private sub: any;
  form: Form;
  sub;

  
  constructor(private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
    private formService: FormService,
    private menuService: MenuService) { }

    dummy = null;

  ngOnInit() {
    console.log("!!!! Init Content DIsplay",this.contentId);
    setTimeout(()=>{
      this.dummy = {
        tipoDocTurno: "TB",
        fechaTurno: moment(),
        numTurno: 19,
        patio: "1",
        tipoTurno: "ENTRADA",
        usoLogico: "EMPTY",
        grupo: "IMPORTACION",
        lineaNaviera: { "value": "ROT", "label": "ROTTERDAN" },
        nitClienteCarga: { "value": "900547176", "label": "FOCUS SOFTWARE SOLUTIONS SAS" },    
        fechaArriboPto: moment("31-12-2018",'DD-MM-YYYY') 
      }
  
      
    },2000)






  }



  ngAfterViewInit() {
    this.loadForm();
  }
  
  ngOnChanges(changes){
    console.log("changes",changes['contentId']);
    this.formService.getForm(this.contentId).subscribe(form => {
      this.form = form
    })
  }

  ngOnDestroy() {
    console.log("!!!! Destroy Content DIsplay",this.contentId);
  //  this.sub.unsubscribe();
  }

  loadForm() {

    //console.log("1st",this.formHost);
    /*
    console.log("1st",this.formHost);
    console.log("sec",this.formHost2);
    let componentFactory=
    this.componentFactoryResolver.resolveComponentFactory(Ing001);
    
    let viewContainerRef= this.formHost2.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    */
  }

}