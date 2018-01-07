import { Component, OnInit,OnDestroy } from '@angular/core';
import { MenuService } from '../menu/mock-menu.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  
  userApps=[];  
  showApps:boolean=true;
  sub;
  constructor(private menuService:MenuService) { };

  ngOnInit() {    
    this.sub=this.menuService.msgPublisher$.subscribe(data=>{      
      switch(data.msg){
        case MenuService.messages.SHOW_APPS: this.showApps=data.value;
        break;
       
      }
    })

    this.menuService.getMenu().subscribe(menu=>this.userApps=menu);

   ;
  }

  ngOnDestroy(){    
    this.sub.unsubscribe();
  }

  onAppClick(i:number){
    this.menuService.selectApp(i);
  }

}
