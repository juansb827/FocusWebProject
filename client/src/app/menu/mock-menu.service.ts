import { Observable,Subject } from 'rxjs';
import 'rxjs/add/operator/pairwise';

import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { Injectable } from '@angular/core';


// Todo: get from a remote source of forms metadata
let userMenu=[
    {name:'Contabilidad',icon:'home',options:[
        {name:'Opcion1',icon:'warning'},
        {name:'Opcion2',icon:'warning'},                                        
        {name:'Opcion3',icon:'warning'}                                        
    ]},
    {name:'Bancos',icon:'warning',options:[
        {name:'OpcionX',icon:'warning'},
        {name:'OpcionY',icon:'warning'},                                        
        {name:'OpcionZ',icon:'warning'}                                        
    ]},
    {name:'Ventas',icon:'shopping_basket',options:[]},
    {name:'Work',icon:'work',options:[]},
    {name:'Item5',icon:'home',options:[]},
    {name:'Bancos',icon:'warning',options:[]}
    
]
    
    
@Injectable()
export class MenuService{

    menu:any;
    currentApp:number;
    currentAppOption:number;
    optionsSubject = new Subject<any>();  
    appsSubject=new Subject<any>();
    

    constructor(private router:Router){   
       this.menu=userMenu;     
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
        this.currentAppOption=null;
        //this.router.navigate(['/login']);
        this.optionsSubject.next(userMenu[i]);
    }

    loadAppOption(optionIndex:number){
        const appIndex=this.currentApp;
        const app=userMenu[appIndex];
        const option=userMenu[appIndex].options[optionIndex];
        
        
        var route='/app/'+app.name+'/'+appIndex+'/option/'
                    +option.name+'/'+optionIndex;
                    console.log(route);
                    route=route.toLocaleLowerCase();

        this.router.navigate(
            ['/app',app.name,appIndex,'option',option.name,optionIndex]);
        
    }

    getMenu(){
        return Observable.create(observer=>{
            if(this.menu){
                observer.onNext(this.menu);
            }else{
                console.log('downloading menu from server');
                //load menu from server
            }            
        });
    }



}