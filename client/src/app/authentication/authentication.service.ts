import { Injectable } from '@angular/core';
import {  Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map'
 
import { AppConfig } from '../app.config';



 
@Injectable()
export class AuthenticationService {
    subject = new  Subject<any>();

    constructor(private config: AppConfig) { }
 
    login(username: string, password: string) {
        /*
        return this.http.post(this.config.apiUrl + '/users/authenticate', { username: username, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
            */
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

     notifyLogin(user:any){
         this.subject.next(user);
     }

     notifyLogout(){
         this.subject.next();
     }

     getUser(): Observable<any> {
        return this.subject.asObservable();
    }
}