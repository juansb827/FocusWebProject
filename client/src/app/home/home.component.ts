import { Component, OnInit,OnDestroy,AfterViewInit,AfterViewChecked } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuService } from '../menu/menu.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy,AfterViewChecked {
  
  userApps$: Observable<any>;  
  showApps:boolean=false;
  
  constructor(private menuService:MenuService) { 
      this.userApps$ = this.menuService.getMenu();
  };

  ngOnInit() {         
  

  
   
   
  }

  ngAfterViewChecked(){

  
  }

  ngOnDestroy(){    
   
  }

  onAppClick(i:number){
    //Wait 300ms so the user will be able to see an animation 
    setTimeout(()=>{
      this.menuService.selectApp(i)
      
    },300);
    
  }

}
