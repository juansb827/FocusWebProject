import { Observable, Subject, Subscription, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/first';

import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';


// Todo: get from a remote source
let userMenuu = [
    {
        name: 'Contenedores', icon: 'home', options: [
            { id:23, name: 'Creacion de Turnos', icon: 'warning', form: 'turnos_inspeccion' },
            { id:11, name: 'Opcion2', icon: 'warning', form: 'turnos_inspeccion' },
            { id:21, name: 'Opcion3', icon: 'warning' }
        ]
    },
    {
        name: 'Bancos', icon: 'warning', options: [
            { id:0, name: 'OpcionX', icon: 'warning' },
            { id:1, name: 'OpcionY', icon: 'warning' },
            { id:2, name: 'OpcionZ', icon: 'warning' }
        ]
    },
    { name: 'Ventas', icon: 'shopping_basket', options: [] },
    { name: 'Work', icon: 'work', options: [] },
    { name: 'Item5', icon: 'home', options: [] },
    { name: 'Bancos', icon: 'warning', options: [] }

]

interface UiState {
    userId:number;
    currentThreadId: number;
    currentError?: string;
}

@Injectable()
export class MenuService {
    
    


    private userMenu;
    private selectedApp = new BehaviorSubject<any>(null);
    selectedApp$ = this.selectedApp.asObservable();
    private selectedOptionId = new BehaviorSubject<any>(null);
    selectedOptionId$: Observable<any>;
    private selectedOption = new BehaviorSubject<any>(null);
    selectedOption$ = this.selectedOption.asObservable();

    //TODO store:
    applicationState = {
        uiState: {

        },
        storeData :{

        }
    }

  
    private currentAppIndex: number;
    private currentOptionIndex: number;

     




    
    constructor(private router: Router, private route: ActivatedRoute) {
        //Used for notifying the Navbar after a page reload
        /*
        this.routeChanges = this.router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe((event) => {    
                if(true) return;                
                let r = this.route;
                
                while (r.firstChild) {
                    r = r.firstChild;
                }

                r.params.first().subscribe(params => {
                    console.log("gotParamsinService", params);
                    if (!params.appId) return;
                    console.log(";V ");
                    this.currentAppIndex=params.appId;
                    this.selectApp(params.appId, params.optionId);
                   
                    
                });


            });

            */
    }




    goHome() {
        this.router.navigate(['/']);     
        this.selectedApp.next(null);

    }

    selectApp(i: number, option?: number) {
        console.log("OnselectApp", i);
        this.getMenu().subscribe( menu=> {
            this.currentAppIndex = i;
            this.selectedApp.next(menu[i]);
            
            if(option){
                this.selectAppOption(option);     
            }else{ //Selects the first option
                const app = menu[i];
                if(app.options && app.options.length>0){
                    this.selectAppOption(app.options[0].id);     
                }
                
            }
        
        })        
    }

    selectAppOption(optionId: number) {
        console.log("OnSelectAppOption", optionId);

        const appIndex = this.currentAppIndex;
        const app = this.userMenu[appIndex];
        const option = app.options.find( el => {             
            return el.id == optionId 
        });    
        if(!option) {
            console.log(`The option ${optionId} is not valid`);     
            return;
        }
        this.selectedOptionId.next(option.id);
        this.selectedOption.next(option);
        
        this.router.navigate(['/app', app.name, appIndex, 'option', option.name, option.id]);
       
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
        if (!this._menu) {
            this._menu = this.loadMenu().publishReplay(1).refCount();
        }
        return this._menu;
    }



}