import { Observable,Subject } from 'rxjs';
import 'rxjs/add/operator/pairwise';

import { Router, ActivatedRoute, NavigationStart,NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';


// Todo: get from a remote source
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
    private messageSource=new Subject<any>();
    msgPublisher$=this.messageSource.asObservable();

    private selectedApp=new Subject<any>();
    currentApp$=this.selectedApp.asObservable();

    static readonly messages={
        SHOW_APPS: "SHOW_APPS",      
        SHOW_TABS: "SHOW_TABS",
        SELECT_TAB: "SELECT_TAB"
    }

    menu:any;
    currentAppIndex:number;
    currentOptionIndex:number;
    optionsSubject = new Subject<any>();  
    
    

    constructor(private router:Router,private route:ActivatedRoute){   
       this.router.events
        .filter(event => event instanceof NavigationEnd)
         .subscribe((event) => {
             let r=this.route;
             while (r.firstChild) {
                r = r.firstChild
            }
             r.params.subscribe(params=>{                
               // Now you can use the params to do whatever you want
               console.log("params",params);
               this.currentAppIndex=params.appId;
               this.currentOptionIndex=params.optionId;
               this.selectedApp.next(userMenu[this.currentAppIndex]);
               this.messageSource.next({msg :MenuService.messages.SELECT_TAB, value : this.currentOptionIndex})
             });             
            
        
        });            
    }



    getApps(route){      
       return Observable.of(userMenu); 
    }

    

    goHome(){
        this.router.navigate(['/']);
        this.messageSource.next({msg:MenuService.messages.SHOW_APPS,value:true}); 
        this.selectedApp.next();
        
    }

    loadApp(i:number){
        console.log(userMenu[i].name);        
        this.currentAppIndex=i;
        this.messageSource.next({msg:MenuService.messages.SHOW_APPS,value:false});
        this.selectedApp.next(userMenu[i]);
    }

    loadAppOption(optionIndex:number){
        this.currentOptionIndex=optionIndex;
        const appIndex=this.currentAppIndex;
        const app=userMenu[appIndex];
        const option=app.options[optionIndex];      
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