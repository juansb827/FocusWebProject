import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/mock-menu.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  userApps=[];  
  constructor(private menuService:MenuService) { };

  ngOnInit() {    
    this.menuService.getAppsObservable().subscribe((userApps)=>{   
      this.userApps=userApps;        
    }); 
    this.menuService.getApps();
  }

  loadApp(i:number){
    this.menuService.loadApp(i);          
    this.userApps=[];
  }

}
