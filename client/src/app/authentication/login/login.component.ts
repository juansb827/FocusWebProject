
import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service'

@Component({
  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  model: any = {};
  logged: boolean =false;
  title = "Iniciar Sesión";
  

  constructor( private authenticationService: AuthenticationService) {};    

  login() {
    
       // this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    console.log("Login true",data);
                    this.logged=true;
                    //this.router.navigate([this.returnUrl]);
                },
                error => {
                   // this.alertService.error(error._body);
                    //this.loading = false;
                    this.logged=false;
                    console.log("Login false",error);
                });
    }



}
