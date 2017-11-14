/* Component that displays a DynamicForm */
import { Component, OnInit, AfterViewInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Form } from './form'
import { MyFormDirective } from './forms.directive'
import { FormService } from './form.service'
import {HttpClient} from '@angular/common/http';

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

export class FormDisplayerComponent implements OnInit, AfterViewInit {

  //private sub: any;
  form: Form;

  constructor(private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
    private formService: FormService,
    private http:HttpClient) { }

  ngOnInit() {


    this.formService.getForm("").subscribe(form=>{
      this.form=form
      console.log("form",this.form);
    });
    
    this.route.params.subscribe(params => {
      const appId = +params['appId']; // (+) converts string 'id' to a number
      const optionId = +params['optionId'];
      console.log('app', appId);
      console.log('option', optionId);
    })

    

  }

  ngAfterViewInit() {
    this.loadForm();
  }

  ngOnDestroy() {
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


