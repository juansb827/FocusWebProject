import { Component, OnInit,AfterViewInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {  ActivatedRoute } from '@angular/router';

import {MyFormDirective} from './forms.directive'
import {FormControlService} from './form-control.service'
import {DynamicFormService} from './dynamic-form.service'


@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',  //<ng-template ad-host></ng-template>
  styleUrls: ['./dynamic-form.component.scss']  
})
export class DynamicFormComponent implements OnInit,AfterViewInit {
  
  private sub: any;
  private fields;
  form: FormGroup;

   /*
   @ViewChild(MyFormDirective) formHost: MyFormDirective;
   //@ViewChild("hue") formHost2: FormDirective;
   */

  constructor(private route:ActivatedRoute,
              private componentFactoryResolver: ComponentFactoryResolver,
              private fcService:FormControlService,
              private dfService:DynamicFormService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
        const appId = +params['appId']; // (+) converts string 'id' to a number
        const optionId = +params['optionId'];
        console.log('app', appId);
        console.log('option', optionId);
    })
    //this.loadForm();
    this.fields=this.fcService.getFields();
    this.form=this.fcService.toFormGroup();
  }

  ngAfterViewInit(){
    this.loadForm();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadForm(){
    
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


