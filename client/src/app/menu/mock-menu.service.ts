import { Observable, Subject, Subscription } from 'rxjs';
import 'rxjs/add/operator/pairwise';

import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';


// Todo: get from a remote source
let userMenuu = [
    {
        name: 'Contabilidad', icon: 'home', options: [
            { name: 'Opcion1', icon: 'warning', form: 'turnos_inspeccion' },
            { name: 'Opcion2', icon: 'warning', form: 'turnos_inspeccion' },
            { name: 'Opcion3', icon: 'warning' }
        ]
    },
    {
        name: 'Bancos', icon: 'warning', options: [
            { name: 'OpcionX', icon: 'warning' },
            { name: 'OpcionY', icon: 'warning' },
            { name: 'OpcionZ', icon: 'warning' }
        ]
    },
    { name: 'Ventas', icon: 'shopping_basket', options: [] },
    { name: 'Work', icon: 'work', options: [] },
    { name: 'Item5', icon: 'home', options: [] },
    { name: 'Bancos', icon: 'warning', options: [] }

]


@Injectable()
export class MenuService {
    private messageSource = new Subject<any>();
    msgPublisher$ = this.messageSource.asObservable();

    private userMenu;

    

    static readonly messages = {
        APPS: "APPS",
        SHOW_APPS: "SHOW_APPS",        
        SELECTED_APP: "SELECTED_APP",
        SHOW_APP_OPTIONS: "SHOW_APP_OPTIONS",
        SELECT_OPTION: "SELECT_OPTION",
        LOAD_OPTION: "LOAD_OPTION"
    }

    menu: any;
    currentAppIndex: number;
    currentOptionIndex: number;
    optionsSubject = new Subject<any>();

    routeChanges: Subscription;

    sendMessage(msg,content){
        console.log("onSendMessage",msg,"content",content);
        this.messageSource.next({ msg:msg, value: content });
    }

    constructor(private router: Router, private route: ActivatedRoute) {     
        /*
        this.routeChanges = this.router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe((event) => {
                let r = this.route;
                while (r.firstChild) {
                    r = r.firstChild
                }
                r.params.first().subscribe(params => {
                    console.log("gotParamsinService", params);
                    if (!params.appId) return;
                    this.displayAppOption(params);


                });




            });

            */
    }

    /**
     * Sends a message to the componenets indicating that the AppList  loaded
     */

    loadAppsMenu(){
        if(!this.userMenu){
            setTimeout(()=>{
                this.userMenu=userMenuu;
                this.sendMessage( MenuService.messages.APPS,this.userMenu);
                this.sendMessage(MenuService.messages.SHOW_APPS,true);
            },100)
        }else{
            this.sendMessage( MenuService.messages.APPS,this.userMenu);
            this.sendMessage(MenuService.messages.SHOW_APPS,true);       
        }
       
    }



    goHome() {
       this.router.navigate(['/']);
       this.sendMessage( MenuService.messages.SHOW_APPS,true);   
       this.sendMessage( MenuService.messages.SELECT_OPTION,-1);     
       this.sendMessage( MenuService.messages.SELECTED_APP,null);

    }

    selectApp(i: number) {
        console.log("OnselectApp",i);
        this.currentAppIndex = i;
        this.sendMessage( MenuService.messages.SHOW_APPS,false);        
        this.sendMessage( MenuService.messages.SELECTED_APP,this.userMenu[i])
        
    }

    selectAppOption(optionIndex: number) {
        console.log("OnSelectAppOption");

        const appIndex = this.currentAppIndex;
        const app = this.userMenu[appIndex];
        const option = app.options[optionIndex];        
        
        this.router.navigate(['/app', app.name, appIndex, 'option', option.name, optionIndex]);
        console.log("navigate");
    }

    /**
     * Tells the components to display an Option
     * @param params - routeParams
     */
    displayAppOption(appIndex,optionIndex) {
        this.currentAppIndex = appIndex;
        this.currentOptionIndex = optionIndex;

        //When this method it's called, the userMenu may not be yet loaded
        // so it's necessary to wait for it's load
        this.msgPublisher$.first().subscribe(msg=>{
            if(msg.msg==MenuService.messages.APPS){
                const currentApp = this.userMenu[this.currentAppIndex];
                const currentOption = currentApp.options[this.currentOptionIndex];                        
                this.sendMessage( MenuService.messages.SELECTED_APP,currentApp);
                this.sendMessage( MenuService.messages.SELECT_OPTION, this.currentOptionIndex );
                this.sendMessage( MenuService.messages.LOAD_OPTION,currentOption );                
            }
        })       
        this.loadAppsMenu();
      
    }

    getMenu() {
        return Observable.create(observer => {
            if (this.menu) {
                observer.onNext(this.menu);
            } else {
                console.log('downloading menu from server');
                //load menu from server
            }
        });
    }



}