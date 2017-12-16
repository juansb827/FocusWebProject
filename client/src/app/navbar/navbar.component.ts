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
  selectedOptionIndex;
  constructor(private auth:AuthenticationService, private menuService:MenuService  ) { }

  ngOnInit() {

    this.menuService.msgPublisher$.subscribe(data=>{
      switch(data.msg){
        case MenuService.messages.SELECT_TAB: this.selectedOptionIndex=data.value;
      }
    })
  
    this.mockAuth.getLoginObservable().subscribe(user=>{
      this.user=user;  
    });  
    this.mockAuth.loadUser();   
    //makes the tabs change, everytime a user selects a new app         
    this.menuService.currentApp$.subscribe(currentApp=>{
      console.log("selected App",currentApp);
      this.currentApp=currentApp;
    });
    
      
    

  }

  onTabClick(index){    
    this.menuService.loadAppOption(index);
  }

  onGoBack(){
    this.menuService.goHome();
  }





}
