
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthenticationService} from '../authentication.service'
import {MockAuth} from '../mock-auth.service'

@Component({
  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  model: any = {};  
  returnUrl: string;
  mockAuth=MockAuth;
  

  constructor( private authenticationService: AuthenticationService,
               private route:ActivatedRoute,
               private router:Router) {};    

  ngOnInit(){
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {    
       // this.loading = true;
        this.mockAuth.login(this.model)
            .subscribe(
                data => {
                    console.log("Login true",data);
                    //this.logged=true;
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                   // this.alertService.error(error._body);
                    //this.loading = false;
                    //this.logged=false;
                    console.log("Login false",error);
                });
             }
}
