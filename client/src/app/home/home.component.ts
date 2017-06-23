import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/mock-menu.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menuService=MenuService;
  userApps;
  constructor() { }

  ngOnInit() {
    this.menuService.getUserApps().subscribe((userApps)=>{
      this.userApps=userApps;  
    }); 

    
    
  }

}
