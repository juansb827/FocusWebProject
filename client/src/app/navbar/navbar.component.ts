import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../authentication/authentication.service';
import { MockAuth } from '../authentication/mock-auth.service';
import { User } from '../user/user'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mockAuth=MockAuth;
  user:User;
  constructor(private auth:AuthenticationService) { }

  ngOnInit() {
    this.mockAuth.getLoginObservable().subscribe(user=>{
      this.user=user;  
    });  
    this.mockAuth.loadUser();
  }

}
