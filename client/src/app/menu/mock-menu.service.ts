import { Observable } from 'rxjs/Observable';

let userMenu=[
    {name:'Contabilidad',icon:'home'},
    {name:'Bancos',icon:'warning'},
    {name:'Ventas',icon:'shopping_basket'},
    {name:'Work',icon:'work'},
    {name:'Item5',icon:'home'},
    {name:'Bancos',icon:'warning'}
    
]
    
    

export const MenuService={
    getUserApps():Observable<any>{
        return Observable.create(observer=>{
            setTimeout(()=>{
                observer.next(userMenu);
            },300)            
        });    
    }


}