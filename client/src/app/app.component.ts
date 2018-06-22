import { Component,OnInit, ViewChild, ChangeDetectionStrategy} from '@angular/core';
import { MenuService } from './menu/menu.service';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent implements OnInit{
  //Subscription to menuService events
  @ViewChild('sidenav') sidenav: MatSidenav;  
  menuSub;
  currentApp;
  constructor(private menuService:MenuService){}

  ngOnInit(){
    
  }

  ngOnDestroy() {
    this.menuSub.unsubscribe();
    
  }


}
