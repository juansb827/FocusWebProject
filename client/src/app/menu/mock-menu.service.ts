import { Observable, Subject, Subscription } from 'rxjs';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/first';

import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';


// Todo: get from a remote source
let userMenuu = [
    {
        name: 'Inspeccion Contenedores', icon: 'home', options: [
            { name: 'Creacion de Turnos', icon: 'warning', form: 'turnos_inspeccion' },
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
        SELECTED_APP: "SELECTED_APP",
       
    }

  
    currentAppIndex: number;
    currentOptionIndex: number;
    optionsSubject = new Subject<any>();

    routeChanges: Subscription;

    sendMessage(msg, content) {
        console.log("onSendMessage", msg, "content", content);
        this.messageSource.next({ msg: msg, value: content });
    }

    constructor(private router: Router, private route: ActivatedRoute) {
        //Used for notify the Navbar after a page reload
        this.routeChanges = this.router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe((event) => {                    
                let r = this.route;
                
                while (r.firstChild) {
                    r = r.firstChild;
                }

                r.params.first().subscribe(params => {
                    console.log("gotParamsinService", params);
                    if (!params.appId) return;
                    this.currentAppIndex=params.appId;
                    this.sendMessage(MenuService.messages.SELECTED_APP,params.appId);            
                });


            });

            
    }




    goHome() {
        this.router.navigate(['/']);     
        this.sendMessage(MenuService.messages.SELECTED_APP, null);

    }

    selectApp(i: number) {
        console.log("OnselectApp", i);
        this.currentAppIndex = i;
        this.selectAppOption(0);     

    }

    selectAppOption(optionIndex: number) {
        console.log("OnSelectAppOption");

        const appIndex = this.currentAppIndex;
        const app = this.userMenu[appIndex];
        const option = app.options[optionIndex];
        this.router.navigate(['/app', app.name, appIndex, 'option', option.name, optionIndex]);
       
    }


    loadMenu(): Observable<any> {
        console.log("Fecthing menu");
        return Observable.create(observer => {
            let savedMenu = null; // todo get from local storage
            if (savedMenu) {
                this.userMenu=savedMenu;
                observer.next(savedMenu);
            } else { //todo fecth from server
                this.userMenu=userMenuu;
                observer.next(userMenuu);
            }

        })
    }

    _menu;
    getMenu(): Observable<any> {
        console.log("get menu");
        if (!this._menu) {
            this._menu = this.loadMenu().publishReplay(1).refCount();
        }
        return this._menu;
    }



}