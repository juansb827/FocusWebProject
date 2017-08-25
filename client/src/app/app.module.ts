import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule}from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AppConfig } from './app.config';

import { AuthenticationService } from './authentication/authentication.service';
import { MenuService } from './menu/mock-menu.service';
import { AuthGuard } from './authentication/authentication.guard';
import { LoginComponent } from './authentication/login/login.component';
import { SnackbarComponent } from './messages/toaster.service';
import { ToasterService } from './messages/toaster.service';
import { NavbarComponent } from './navbar/navbar.component';

import { HomeComponent } from './home/home.component';
import { DynamicFormComponent } from './forms/dynamic-form.component';
import { DynamicFormFieldComponent } from './forms/dynamic-form-field.component';

/**/
import { Ing001 } from './forms/templates/ing-001';

@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    SnackbarComponent,
    DynamicFormComponent,  DynamicFormFieldComponent 
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule    
    
    
  ],
  providers: [
    AppConfig,
    AuthenticationService,    
    AuthGuard,
    ToasterService,
    MenuService
  ],
  entryComponents:[
    SnackbarComponent  
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
