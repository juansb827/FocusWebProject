/* Component that displays a DynamicForm */
import { Component, OnInit, OnDestroy,AfterViewInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Form } from './form'

import { FormService } from './form.service'
import { MenuService } from '../menu/mock-menu.service'

@Component({  //<ng-template ad-host></ng-template>
  selector: 'form-displayer',
  template:
  `<div style="text-align:center">
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
export class FormDisplayerComponent implements OnInit,OnDestroy, AfterViewInit {

  //private sub: any;
  form: Form;
  sub;
  constructor(private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
    private formService: FormService,
    private menuService: MenuService) { }

  ngOnInit() {

    this.sub=this.menuService.msgPublisher$.subscribe(data => {

      switch (data.msg) {
        case MenuService.messages.LOAD_OPTION:        
          let option = data.value;
          this.formService.getForm(option.form).subscribe(form => {
            this.form = form
          //  console.log("form", this.form);
          });
          break;

      }
    })



    this.route.params.subscribe(params => {    console.log("changes");
      this.menuService.displayAppOption(params.appId, params.optionId);
    })

  }

 

  ngAfterViewInit() {
    this.loadForm();
  }

  ngOnDestroy() {
     this.sub.unsubscribe();
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


