import { Component, OnInit,AfterViewInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import {MyFormDirective} from './forms.directive'
import {Ing001} from './templates/ing-001'
@Component({
  selector: 'app-forms',
  template: '<ng-template ad-host></ng-template>',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit,AfterViewInit {

  private sub: any;

   @ViewChild(MyFormDirective) formHost: MyFormDirective;
   //@ViewChild("hue") formHost2: FormDirective;

  constructor(private route:ActivatedRoute,private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
        const appId = +params['appId']; // (+) converts string 'id' to a number
        const optionId = +params['optionId'];
        console.log('app', appId);
        console.log('option', optionId);
    })
    this.loadForm();
  }

  ngAfterViewInit(){
    this.loadForm();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadForm(){
    console.log("1st",this.formHost);
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


