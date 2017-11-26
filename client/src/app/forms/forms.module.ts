import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component'
import { DynamicFormFieldComponent } from './dynamic-form-field.component'
import { FormDisplayerComponent } from './form-displayer.component'
import { FormEditorComponent, DialogValidaciones } from './form-editor/form-editor.component'
import { DragulaModule } from 'ng2-dragula'
import { FormControlService } from './form-control.service'
import { FormService } from './form.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module'
import {  MAT_DATE_LOCALE } from '@angular/material';
import { OnlyNumber } from './validators'



@NgModule({
    imports: [CommonModule,
         FormsModule, ReactiveFormsModule, MaterialModule,
          DragulaModule,HttpClientModule
          ],
    declarations: [
        DynamicFormComponent,
        DynamicFormFieldComponent,
        FormDisplayerComponent,
        FormEditorComponent,
        DialogValidaciones,
        OnlyNumber

    ],
    exports: [DynamicFormComponent,
        DynamicFormFieldComponent,
        FormDisplayerComponent,
        FormEditorComponent,OnlyNumber]
    , entryComponents: [DialogValidaciones]

})
export class DynamicFormsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DynamicFormsModule,
            providers: [FormControlService, FormService, {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}]
        }
    }
}
