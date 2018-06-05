
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../authentication.service'
import { ToasterService } from '../../messages/toaster.service'


@Component({

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loading = false;
  model: any = {};
  returnUrl: string;

  constructor(private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private toasterService: ToasterService) { };

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.authService.logout();

    this.authService.user.subscribe(user=>{
      console.log("user",user);
      if(!user) return;
      this.loading=false;
      this.toasterService.showToaster("Bienvenido, "+user.name);    
      this.router.navigate([this.returnUrl]);
    })
  }


  login() {
    this.loading = true;
    this.authService.login(this.model.email,this.model.password);
  }
 
  
}
