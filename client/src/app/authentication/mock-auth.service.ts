import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { User } from '../user/user'; 
let credentials={
    company: "a",
    email: "a",
    password: "a"    

}
let user={
    company:"ICPAR",
    email:"whatever@test.com",
    name: "Rani Ranenses",
    token: "asdfdjfakñ"        
}

let subject = new Subject<any>();  

let notifyLogin=function(user:any){
         subject.next(user);
}
let storedUser;
export const MockAuth={
    
    
    login:(creds:any)=>{
        let observable=Observable.create( observer=>{
            if(creds.email.toUpperCase()===credentials.email.toUpperCase()
            && creds.password===credentials.password
            && creds.company===credentials.company){
                localStorage.setItem('currentUser', JSON.stringify(user));
                setTimeout(()=>{
                    observer.next(user);
                    notifyLogin(user);
                },1500);
                
            }else{
                observer.error("Wrong credentials");
            }
        });                
        return observable;
    },
    logout:()=>{
        localStorage.removeItem('currentUser');
    } ,
    getLoginObservable():Observable<any>{
        return subject.asObservable();
    },
     loadUser() {
         if(!storedUser){
            storedUser=JSON.parse(localStorage.getItem('currentUser'));
         }
         subject.next(storedUser);                         
    }
      
}