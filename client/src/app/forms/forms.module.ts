import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component'
import { DynamicFormFieldComponent } from './dynamic-form-field.component'
import { FormEditorComponent, DialogValidaciones } from './form-editor/form-editor.component'
import { DragulaModule } from 'ng2-dragula'
import { FormControlService } from './form-control.service'
import { FormService } from './form.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module'
import {  MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { OnlyNumber } from './validators'

export const MY_FORMATS = {
    parse: {
      dateInput: 'DD-MM-YYYY',
    },
    display: {
      dateInput: 'DD-MM-YYYY',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
    },
  };



@NgModule({
    imports: [CommonModule,
         FormsModule, ReactiveFormsModule, MaterialModule,
          DragulaModule,HttpClientModule
          ],
    declarations: [
        DynamicFormComponent,
        DynamicFormFieldComponent,        
        FormEditorComponent,
        DialogValidaciones,
        OnlyNumber

    ],
    exports: [DynamicFormComponent,
        DynamicFormFieldComponent,        
        FormEditorComponent,OnlyNumber]
    , entryComponents: [DialogValidaciones]

})
export class DynamicFormsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DynamicFormsModule,
            providers: [FormControlService, FormService, 
                {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
                {provide: MAT_DATE_LOCALE, useValue: 'es-CO'}]
        }
    }
}
