import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../authentication/authentication.service';

import { MenuService } from '../menu/mock-menu.service';
import { User } from '../user/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit, OnDestroy {

  user: User;
  currentApp;
  showAppSection: boolean;
  //subscription to menu service messages
  private sub;
  //subscription to session changes
  private sessionSub;
  constructor(private authService: AuthService, private menuService: MenuService,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.menuService.msgPublisher$.subscribe(data => {
      switch (data.msg) {
        case MenuService.messages.SELECTED_APP:
          this.menuService.getMenu().first().subscribe(menu => {
            
            if(data.value!=null){
              this.currentApp = menu[data.value];
            }
            //Sends the code to the bottom of the call stack
            //so  the fade-in animation will start after the componenet is rendered
            setTimeout(() => {
              this.showAppSection = data.value!=null;
            })
          })
          break;
      }
    })
    //gets the user after a pageReload
    this.user = this.authService.getUser();
    this.sessionSub = this.authService.sessionChanges$.subscribe(user => {
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

  logout() {
    this.router.navigate(['login']);
    this.authService.logout();
  }

  goBack() {
    this.menuService.goHome();
  }





}
