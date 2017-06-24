import { Observable,Subject } from 'rxjs';
import 'rxjs/add/operator/pairwise';

import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { Injectable } from '@angular/core';



let userMenu=[
    {name:'Contabilidad',icon:'home',options:[
        {name:'Opcion1',icon:'warning'},
        {name:'Opcion2',icon:'warning'},                                        
        {name:'Opcion3',icon:'warning'}                                        
    ]},
    {name:'Bancos',icon:'warning'},
    {name:'Ventas',icon:'shopping_basket'},
    {name:'Work',icon:'work'},
    {name:'Item5',icon:'home'},
    {name:'Bancos',icon:'warning'}
    
]
    
    
@Injectable()
export class MenuService{

    currentApp:number;
    optionsSubject = new Subject<any>();  
    appsSubject=new Subject<any>();
    

    constructor(private router:Router){   
       this.router.events
        .filter(event => event instanceof NavigationStart)
         .subscribe((event:NavigationStart) => {
             console.log(event);
        // You only receive NavigationStart events
        });            
    }

    getAppsObservable():Observable<any>{
        return this.appsSubject.asObservable();        
    }

    getApps(){
       this.appsSubject.next(userMenu); 
    }

    getAppOptions():Observable<any>{
        return this.optionsSubject.asObservable();
    }

    goHome(){
        this.router.navigate(['/']);
        this.appsSubject.next(userMenu);    
        this.optionsSubject.next();    
    }

    loadApp(i:number){
        console.log(userMenu[i].name);        
        this.currentApp=i;
        //this.router.navigate(['/login']);
        this.optionsSubject.next(userMenu[i]);
    }


}