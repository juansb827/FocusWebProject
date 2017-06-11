import { async, ComponentFixture, TestBed,fakeAsync,tick } from '@angular/core/testing';
import {Observable} from 'rxjs/Rx';
import { LoginComponent } from './login.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppConfig } from '../../app.config';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AuthenticationService } from '../authentication.service';

/*
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
*/

describe('LoginComponent', () => {
  let fixture : ComponentFixture<LoginComponent>;  
  let component:LoginComponent;
  let de: DebugElement;
  let fakeAuthService: any;
  let authService: AuthenticationService;
  /*
  //runs before every test
  beforeEach(()=>{
    /*
    fakeAuthService={
      login: (username:string,password:string) => Observable.of(true)           
    } instead of faking use jasmine 
    
    fakeAuthService=jasmine.createSpyObj(fakeAuthService,['login'])  
    fakeAuthService.login.and.returnValue(Observable.of(true));
    component= new LoginComponent(fakeAuthService);
  });
  */

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports: [HttpModule,FormsModule,MaterialModule,BrowserAnimationsModule],
      declarations : [LoginComponent],
      providers : [AuthenticationService,AppConfig]
    });

    fixture= TestBed.createComponent(LoginComponent);
    component=fixture.componentInstance;
    console.log("inst",component);
    de=fixture.debugElement;
    authService=TestBed.get(AuthenticationService);
  })

  it('should add 1+1',()=>{
    expect(1+1).toEqual(2);
  });

  it("box login should say 'Iniciar Sesión' ",()=>{    
    expect(component.title).toEqual('Iniciar Sesión');
  });

  it("should do whatever",()=>{
    component.model.username="pepe";
    component.model.password="pepepassword";
    
    spyOn(authService,'login')
      .and.callFake(()=>{
        return Observable.of(true);
      });
    component.login();
    fixture.detectChanges();
    const el=de.query(By.css('p')).nativeElement;


    expect(el.textContent).toEqual('true');
    //expect(component.logged).toEqual(true);
  })
  /*
  it("should do whatever async",fakeAsync (()=>{
    component.logged=true;
    component.model.username="pepe";
    component.model.password="pepepassword";
    
   

    spyOn(authService,'login')
      .and.callFake(()=>{
         var foo = Observable.create(function (observer) {
           setTimeout(function(){
              observer.error("sdadas");
           },1000)
          
        });
        return foo;
      });
        
        
         

    const el=de.query(By.css('p')).nativeElement;
    component.login();
    tick(2000);
    fixture.detectChanges();
    expect(el.textContent).toEqual('false');    
  }));
  
*/
});
