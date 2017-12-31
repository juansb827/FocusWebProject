
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../authentication.service'
import { ToasterService } from '../../messages/toaster.service'


@Component({

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loading = false;
  model: any = {};
  returnUrl: string;


  selectedValue: string;

  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];


  constructor(private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private toasterService: ToasterService) { };

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.authService.logout();
  }


  login() {
    this.loading = true;
  //  this.authService.isAuthenticated();
  this.authService.login(this.model.email,this.model.password).subscribe(user=>{
    console.log("user",user);
    this.loading=false;
    this.toasterService.showToaster("Bienvenido, "+user.name);    
    this.router.navigate([this.returnUrl]);
    
  },  error => {
     this.loading=false;
     console.log("Login false",error);
 })

    
    /*
    this.authService.login(this.model)
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
            }); */
  }
}
