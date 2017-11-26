import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';


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

import {DynamicFormsModule} from './forms/forms.module'
import {  MAT_DATE_LOCALE } from '@angular/material';
 //dynamic forms
 /*
 import { FormDisplayerComponent } from './forms/form-displayer.component';
import { DynamicFormComponent,TimesPipe } from './forms/dynamic-form.component';
import { DynamicFormFieldComponent } from './forms/dynamic-form-field.component';
import { FormControlService } from './forms/form-control.service';
import { FormService } from './forms/form.service';
*/


/**/




@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    SnackbarComponent,     
    
    
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
    
    AuthenticationService,    
    AuthGuard,
    ToasterService,
    MenuService    
        
  ],
  entryComponents:[
    SnackbarComponent,  

     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
