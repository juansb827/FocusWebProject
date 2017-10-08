
import { Component, OnInit,ViewEncapsulation, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {AuthenticationService} from '../authentication.service'
import {ToasterService} from '../../messages/toaster.service'
import {MockAuth} from '../mock-auth.service'

@Component({
  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
   encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit{
  loading=false;  
  model: any = {};  
  returnUrl: string;
  mockAuth=MockAuth;

  selectedValue: string;
  
    foods = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
    ];
  

  constructor( private authenticationService: AuthenticationService,
               private route:ActivatedRoute,
               private router:Router,
               private toasterService:ToasterService) {};    

  ngOnInit(){
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  test(wa){
      console.log(wa);
  }

  login() {    
        this.loading=true;
                    
        //this.toasterService.showToaster("Bienvenido, Rani Ranenses Zepulveda Cruajac");
        this.mockAuth.login(this.model)
            .subscribe(                
                user => {                    
                    console.log("Bienvenido/a Login true",user);                    
                    this.router.navigate([this.returnUrl]);
                    this.toasterService.showToaster("Bienvenido, "+user.name);
                    this.loading=false;
                },
                error => {
                   // this.alertService.error(error._body);
                    //this.loading = false;
                    //this.logged=false;
                    this.loading=false;
                    console.log("Login false",error);
                });
             }
}
