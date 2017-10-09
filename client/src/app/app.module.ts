import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MATERIAL_COMPATIBILITY_MODE} from '@angular/material';
import { MaterialModule } from './material.module';
import {DragulaModule} from 'ng2-dragula'

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
 
 //dynamic forms
 import { FormDisplayerComponent } from './forms/form-displayer.component';
import { DynamicFormComponent,TimesPipe } from './forms/dynamic-form.component';
import { DynamicFormFieldComponent } from './forms/dynamic-form-field.component';
import { FormControlService } from './forms/form-control.service';
import { FormService } from './forms/form.service';



/**/

import { FormEditorComponent } from './forms/form-editor/form-editor.component';
import { DialogValidaciones } from './forms/form-editor/form-editor.component';

@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    SnackbarComponent, DialogValidaciones,
    FormDisplayerComponent, DynamicFormComponent,  DynamicFormFieldComponent, FormEditorComponent,
    TimesPipe 
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    DragulaModule
    
    
  ],
  providers: [
    AppConfig,
    AuthenticationService,    
    AuthGuard,
    ToasterService,
    MenuService,
        FormService,
        {provide: MATERIAL_COMPATIBILITY_MODE, useValue: true}
        
  ],
  entryComponents:[
    SnackbarComponent,
    DialogValidaciones

     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
