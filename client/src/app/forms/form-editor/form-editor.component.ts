
import { Component,Inject, OnInit,ViewChild } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { Form } from '../form'
import { FieldBase } from '../field-base'
import { FormControlService } from '../form-control.service'
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.scss'],
  providers : [FormControlService]
})
export class FormEditorComponent implements OnInit {
  form : Form;
  fields : FieldBase<any>[];
  formGroup : FormGroup;
  @ViewChild('formPreview') formPreview;
  constructor(private fcService:FormControlService,public dialog: MatDialog) { 
    this.fields= [] as FieldBase<any>[];    
    this.form = new Form("newForm","", this.fields);
    
    

  }

  ngOnInit() {
    this.formGroup= this.fcService.toFormGroup(this.form);  
  }
   counter=0;
  agregarCampo(){
    
    
    
    let field=new FieldBase<String>({id:this.counter+"",label:""});
    this.fcService.addFormControl(this.formGroup,field);    
    //console.log("prev",this.formGroup);
    this.form.fields.push(field);
    this.formPreview.updateFormGroup  ();
    this.counter++;
  }

  openDialogValidaciones(){
    this.dialog.open(DialogValidaciones, {width: '80%'});
  }

}

@Component({
  selector: 'dialog-validaciones',
  templateUrl: 'validaciones.html',
})
export class DialogValidaciones {

  constructor(
    public dialogRef: MatDialogRef<DialogValidaciones>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
