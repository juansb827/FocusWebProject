/* Component that displays a DynamicForm */
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {MatTabGroup} from '@angular/material'
import { Form } from './../forms/form'

import { FormService } from '../forms/form.service'
import { MenuService } from '../menu/menu.service'

@Component({  //<ng-template ad-host></ng-template>
    selector: 'tabs-container',
    templateUrl: './tabs.component.html',

    styleUrls: ['./tabs.component.scss']
})
/*
   
*/


//TODO move outside of my form muodule, this componenet uses FormModule but should not be part of it
//
export class TabsComponent implements OnInit, OnDestroy, AfterViewInit {

    selectedTab;
    currentApp;   
    sub;
  
    constructor(private route: ActivatedRoute,

        private menuService: MenuService) { }

    onTabChange(index){     
       this.menuService.selectAppOption(index);
    }    

    ngOnInit() {
       
        console.log("TABSSS")
    
       /*
        this.menuService.msgPublisher$.subscribe(msg=>{
            switch (msg){
                case MenuService.messages.SELECT_OPTION:
                    this.selectedTab=msg.data;
                break; 
            }
        })
        */

        this.route.params.subscribe(params => {
            this.menuService.getMenu().subscribe(menu=>{                
                this.currentApp=menu[params.appId];
                this.selectedTab=params.optionId;
              
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