/* Component that displays a DynamicForm */
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ComponentFactoryResolver, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {MatTabGroup} from '@angular/material'
import { Observable } from 'rxjs/Observable';

import { Form } from './../forms/form'
import { FormService } from '../forms/form.service'
import { MenuService } from '../menu/menu.service'
import { Subscription } from 'rxjs';

@Component({  //<ng-template ad-host></ng-template>
    selector: 'tabs-container',
    templateUrl: './tabs.component.html',

    styleUrls: ['./tabs.component.scss'],
    
})
/*
   
*/



export class TabsComponent implements OnInit, OnDestroy, AfterViewInit {

    selectedOptionId$: Observable<any>;
    selectedApp$: Observable<any>;
    selectedOption$: Observable<any>;
    
    selectedTab;    
    
    tabs = [];

    sub: Subscription;
    appSub: Subscription;
  
    constructor(private route: ActivatedRoute, private menuService: MenuService) {
        
        this.selectedOptionId$ = this.menuService.selectedOptionId$;
        this.selectedApp$ = this.menuService.selectedApp$;
        this.selectedOption$ = this.menuService.selectedOption$;

        
        
                 
        
     }

    onTabChange(index){          
       this.menuService.selectAppOption(this.tabs[index].id);
    }    

    ngOnInit() {                      
        
        this.appSub = this.selectedApp$.subscribe( selectedApp =>{
            
            if( selectedApp == null)  return;
            selectedApp.options.forEach( opt => this.tabs.push(opt) );
            
        })

        this.sub = this.selectedOption$.subscribe( e => {
            if(e == null)  return;            
            this.selectedTab = this.tabs.findIndex( tabContent => tabContent.id == e.id );            
            console.log("Option was", e);
        });   

        /*  Handles the case When the user refreshes the page
        */
        this.selectedApp$.first().subscribe( selectedApp => {
            if(!selectedApp){ //If there is no selected app when this component inits, it is because the user when to it's url manually(e.g)
                this.route.params.first().subscribe(params => {   
                    console.log("Loaded after page refresh");               
                    this.menuService.selectApp(params.appId, params.optionId);                                  
                }) 
            }

        })        

    }



    ngAfterViewInit() {
     //   this.loadForm();
    }

    ngOnDestroy() {
       this.sub.unsubscribe();
       this.appSub.unsubscribe();
    }


}