import { Component,OnInit, ViewChild} from '@angular/core';
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
    this.menuSub=this.menuService.msgPublisher$.subscribe(data=>{
      
        switch (data.msg) {
          case MenuService.messages.SELECTED_APP: 
          /*
            if(data.value){
              this.currentApp = data.value;
              this.sidenav.open();
            }             */
          break;
        
      }
      
    })

  }

  ngOnDestroy() {
    this.menuSub.unsubscribe();
    
  }


}
