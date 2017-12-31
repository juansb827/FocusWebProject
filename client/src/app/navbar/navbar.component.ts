import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../authentication/authentication.service';

import { MenuService } from '../menu/mock-menu.service';
import { User } from '../user/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  user: User;
  currentApp;
  selectedOptionIndex;
  //subscription to menu service messages
  private sub;
  //subscription to session changes
  private sessionSub;
  constructor(private authService: AuthService, private menuService: MenuService) { }

  ngOnInit() {

    this.sub = this.menuService.msgPublisher$.subscribe(data => {
      switch (data.msg) {
        case MenuService.messages.SELECT_OPTION: this.selectedOptionIndex = data.value;
          break;
        //makes the tabs change, everytime the user selects a new app         
        case MenuService.messages.SELECTED_APP: this.currentApp = data.value;
          break;
      }
    })
    //gets the user after a pageReload
    this.user=this.authService.getUser();

    this.sessionSub=this.authService.sessionChanges$.subscribe(user => {
      this.user = user;
    })




  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sessionSub.unsubscribe();
  }

  onTabClick(index) {
    this.menuService.selectAppOption(index);
  }

  onGoBack() {
    console.log("goback");
    this.menuService.goHome();
  }





}
