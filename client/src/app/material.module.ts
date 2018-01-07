import { NgModule } from '@angular/core';
import { MatMomentDateModule} from '@angular/material-moment-adapter';
import {
  MatButtonModule,
  MatProgressBarModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSnackBarModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatSidenavModule,
  MatTabsModule
  
  
  
} from '@angular/material';

@NgModule({
  
  exports: [
    MatButtonModule,
    MatProgressBarModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSidenavModule,
    MatTabsModule
  ]
})
export class MaterialModule {}