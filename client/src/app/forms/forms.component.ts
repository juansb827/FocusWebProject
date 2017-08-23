import { Component, OnInit,AfterViewInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import {MyFormDirective} from './forms.directive'
import {FormService} from './form.service'
import {Ing001} from './templates/ing-001'
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',  //<ng-template ad-host></ng-template>
  styleUrls: ['./forms.component.scss'],
  providers:  [FormService]
})
export class FormsComponent implements OnInit,AfterViewInit {
  //TODO inject form service and test if the dyamic form works
  //rename everthing to dynamic forms
  private sub: any;
  private fields;
  form: FormGroup;

   /*
   @ViewChild(MyFormDirective) formHost: MyFormDirective;
   //@ViewChild("hue") formHost2: FormDirective;
   */

  constructor(private route:ActivatedRoute,
              private componentFactoryResolver: ComponentFactoryResolver,
              private formService:FormService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
        const appId = +params['appId']; // (+) converts string 'id' to a number
        const optionId = +params['optionId'];
        console.log('app', appId);
        console.log('option', optionId);
    })
    //this.loadForm();
    this.fields=this.formService.getFields();
    this.form=this.formService.toFormGroup();
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


