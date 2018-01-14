import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AppConfig } from './app.config';

import { AuthService } from './authentication/authentication.service';
import { TokenInterceptor } from './authentication/token.interceptor';
import { MenuService } from './menu/menu.service';
import { AuthGuard } from './authentication/authentication.guard';
import { ToasterService } from './messages/toaster.service';
import { AlertService } from './messages/alert.service';


/** components */
import { LoginComponent } from './authentication/login/login.component';
import { SnackbarComponent } from './messages/toaster.service';
import { DialogComponent } from './messages/dialog.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TabsComponent } from './home/tabs.components';
import { ContentDisplayerComponent } from './home/content-displayer.component';

import {DynamicFormsModule} from './forms/forms.module'






@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    ContentDisplayerComponent,
    TabsComponent,
    SnackbarComponent,   
    DialogComponent  
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    DynamicFormsModule.forRoot()
    
    
    
  ],
  providers: [
    AppConfig,    
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },    
    AuthGuard,
    ToasterService,
    AlertService,
    MenuService    
        
  ],
  entryComponents:[
    SnackbarComponent,  
    DialogComponent

     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
