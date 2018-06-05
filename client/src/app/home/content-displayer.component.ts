/* Component that displays a DynamicForm */
import { Component, Input, OnInit, OnDestroy, AfterViewInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Form } from './../forms/form'

import { FormService } from '../forms/form.service'
import { MenuService } from '../menu/menu.service'

@Component({  //<ng-template ad-host></ng-template>
  selector: 'content-displayer',
  template:
  `<div style="text-align:center;">
    <dynamic-form *ngIf="form" [form]="form">
    </dynamic-form>
    <div *ngIf="!form">Cargando formulario...</div>
  </div>`,
  styleUrls: []
})
/*
   
*/


//TODO move outside of my form muodule, this componenet uses FormModule but should not be part of it
//
export class ContentDisplayerComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() contentId: String;
  //private sub: any;
  form: Form;
  sub;
  constructor(private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
    private formService: FormService,
    private menuService: MenuService) { }

  ngOnInit() {
    console.log("!!!! Init Content DIsplay",this.contentId);

    this.formService.getForm(this.contentId).subscribe(form => {
      this.form = form
    })
    






  }



  ngAfterViewInit() {
    this.loadForm();
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