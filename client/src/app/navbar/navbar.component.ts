import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { MockAuth } from '../authentication/mock-auth.service';
import { MenuService } from '../menu/mock-menu.service';
import { User } from '../user/user'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  mockAuth=MockAuth;
  user:User;
  currentApp;
  constructor(private auth:AuthenticationService,
              private menuService:MenuService,
              private router:Router) { }

  ngOnInit() {
    this.mockAuth.getLoginObservable().subscribe(user=>{
      this.user=user;  
    });  
    this.mockAuth.loadUser();
   
    this.menuService.getAppOptions().subscribe(currentApp=>{
      //makes the tabs change, everytime a user selects a new app
      this.currentApp=currentApp;
      console.log("current are",currentApp);
    });   
    

  }

  loadOption(index){    
    this.menuService.loadAppOption(index);
  }
  goHome(){
    this.menuService.goHome();
  }





}
