import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map'
import * as JWT from 'jwt-decode';
import { AppConfig } from '../app.config';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class AuthService {

    private _user: BehaviorSubject<any> = new BehaviorSubject(null);
    user: Observable<any> = this._user.asObservable();

    

    getToken(): string {
        return localStorage.getItem('token');
    }


    public isAuthenticated(): boolean {
        // get the token
        const token = this.getToken();
        if (!token) return false;        
        var dec = JWT(token);
        // return a boolean reflecting 
        // whether or not the token is expired
        return dec.exp < new Date().getTime();
    }



    constructor(private config: AppConfig, private http: HttpClient) {
        this._user.next(this.getUser());
     }

    login(email: string, password: string) {

        this.http.post(this.config.apiUrl + '/auth/login', {
            name: "example",
            email: email,
            company: "testCompany",
            password: password
        })  //TODO validate  resp against interface
        .map((resp: any) => {
                // login successful if there's a jwt token in the response

                if (resp && resp.auth) {
                    const user = resp.user;
                    const token = resp.token;
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('token', JSON.stringify(token));    
                    return user;
                }else{
                    throw new Error("Failed Authentication")
                }
            })
            .subscribe(user => this._user.next(user))

    }

    logout() {
        // remove user from local storage to log user out        
        localStorage.removeItem('curssrentUser');
        localStorage.removeItem('token');
        this._user.next(null)        
    }

    
    getUser():any {
        const user=JSON.parse(localStorage.getItem('currentUser'));
        return user;        
    }
}