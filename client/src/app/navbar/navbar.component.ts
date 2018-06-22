import { Component, OnInit, OnDestroy, ViewEncapsulation, DoCheck, ChangeDetectionStrategy,OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../authentication/authentication.service';
import { Observable } from 'rxjs/Observable';
import { MenuService } from '../menu/menu.service';
import { User } from '../user/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit, OnDestroy, DoCheck {

  user: Observable<any>;
  selectedApp$: Observable<any>;

  currentApp;
  
  //subscription to menu service messages
  
  constructor(private authService: AuthService, private menuService: MenuService,
    private router: Router) { }

  ngOnInit() {
    
   
    //gets the user after a pageReload
    this.user = this.authService.user;
    this.selectedApp$ = this.menuService.selectedApp$;
    /*
    this.selectedApp$.subscribe( selectedApp => {
      this.showAppSection =  !!selectedApp
      
    }) */



  }

  ngDoCheck(){    
  }



  ngOnDestroy() {
    
  }

  onTabClick(index) {
    this.menuService.selectAppOption(index);
  }

  logout(){
    this.router.navigate(['login']);
    this.authService.logout();
  }

  goBack() {
    this.menuService.goHome();
  }





}
