import { Component, OnInit,OnDestroy,AfterViewInit,AfterViewChecked } from '@angular/core';
import { MenuService } from '../menu/mock-menu.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy,AfterViewChecked {
  
  userApps=[];  
  showApps:boolean=false;
  sub;
  constructor(private menuService:MenuService) { 
   

  };

  ngOnInit() {       
    this.sub=this.menuService.msgPublisher$.subscribe(data=>{      
      switch(data.msg){
       
       
      }
    })

  
    this.menuService.getMenu().subscribe(menu=>{
      this.userApps=menu;
     
      setTimeout(()=>{
        this.showApps=true;       
      })
    });
   
   
  }

  ngAfterViewChecked(){

  
  }
  ngOnDestroy(){    
    this.sub.unsubscribe();
  }

  onAppClick(i:number){
    //Wait 300ms so the user will see an animation 
    setTimeout(()=>{
      this.menuService.selectApp(i)
      
    },300);
    
  }

}
