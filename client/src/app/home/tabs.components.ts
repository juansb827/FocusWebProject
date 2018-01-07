/* Component that displays a DynamicForm */
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {MatTabGroup} from '@angular/material'
import { Form } from './../forms/form'

import { FormService } from '../forms/form.service'
import { MenuService } from '../menu/mock-menu.service'

@Component({  //<ng-template ad-host></ng-template>
    selector: 'tabs-container',
    templateUrl: './tabs.component.html',

    styleUrls: []
})
/*
   
*/


//TODO move outside of my form muodule, this componenet uses FormModule but should not be part of it
//
export class TabsComponent implements OnInit, OnDestroy, AfterViewInit {

    currentApp;   
    sub;
    private currentTabIndex
    constructor(private route: ActivatedRoute,

        private menuService: MenuService) { }

    onTabChange(index){
       this.currentTabIndex=index;
    }    

    ngOnInit() {
        console.log("TABSSS")
        this.currentTabIndex=0;
       
  
        

        this.route.params.subscribe(params => {
            this.menuService.getMenu().subscribe(menu=>{
                this.currentApp=menu[params.appId];
            });       
          
        })

    }



    ngAfterViewInit() {
     //   this.loadForm();
    }

    ngOnDestroy() {
     //   this.sub.unsubscribe();
    }


}