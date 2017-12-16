import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/mock-menu.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  userApps=[];  
  showApps:boolean=true;
  constructor(private menuService:MenuService) { };

  ngOnInit() {    
    this.menuService.msgPublisher$.subscribe(data=>{
      switch(data.msg){
        case MenuService.messages.SHOW_APPS: this.showApps=data.value;
      }
    })

    this.menuService.getApps(null).subscribe(userApps=>{
      this.userApps=userApps;        
    });
  }

  onAppClick(i:number){
    this.menuService.loadApp(i);          
    //this.userApps=[];
  }

}
