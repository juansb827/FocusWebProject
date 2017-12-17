import { Component, OnInit,OnDestroy } from '@angular/core';
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
export class NavbarComponent implements OnInit,OnDestroy {
  mockAuth = MockAuth;
  user: User;
  currentApp;
  selectedOptionIndex;
  sub;
  constructor(private auth: AuthenticationService, private menuService: MenuService) { }

  ngOnInit() {

    this.sub=this.menuService.msgPublisher$.subscribe(data => {
      switch (data.msg) {
        case MenuService.messages.SELECT_OPTION: this.selectedOptionIndex = data.value;
        break;
        //makes the tabs change, everytime the user selects a new app         
        case MenuService.messages.SELECTED_APP: this.currentApp = data.value; 
        break;
      }
    })

    this.mockAuth.getLoginObservable().subscribe(user => {
      this.user = user;
    });

    this.mockAuth.loadUser();





  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  onTabClick(index) {
    this.menuService.selectAppOption(index);
  }

  onGoBack() {
    console.log("goback");
    this.menuService.goHome();
  }





}
