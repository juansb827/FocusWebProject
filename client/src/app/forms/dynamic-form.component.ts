import { Component, Input, OnInit, OnChanges,OnDestroy,AfterViewInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { FormGroup } from '@angular/forms';
import 'rxjs/add/operator/catch'
import { FormControlService } from './form-control.service'
import { FormService } from './form.service'
import { Form, FormError } from './form'
import { FieldBase } from './field-base'
import { DragulaService } from 'ng2-dragula';

import { AlertService } from './../messages/alert.service'


@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',  //<ng-template ad-host></ng-template>
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [FormControlService]
})
export class DynamicFormComponent implements OnInit,OnChanges,OnDestroy {

  @Input() form: Form;
  formGroup: FormGroup;
  initialValues: Object;
  formfields : any;
  //for the form editor
  editMode: boolean = false;

  innerWidth: Number;
  constructor(
    private formService: FormService,
    private fcService: FormControlService,
    private dragService: DragulaService,
    private alertService: AlertService) {
      this.innerWidth=window.screen.width;
      console.log(  (window.screen.height) + "hpx", (window.screen.width) + "wpx");
   /*
    dragService.setOptions('nested-bag', {
      moves: function (el: any, container: any, handle: any): any {
        //   console.log(el, container);
        // console.log("ha", handle.className);
        //if(handle.className)
        //return handle.className.indexOf('handle') !== -1;//handle.className === 'handle';
      } 
    });
 */
  
  }

  getColspan(field:FieldBase<any>) {
    //console.log("get colspan");

    return ' colspan-sm-'+(null || 12)+
           ' colspan-md-'+(null || 6) +
           ' colspan-lg-'+(field.appearance.colspan || 1);

    /*
    console.log("getColsPan",this.innerWidth);
    const width=window.screen.width;
    if (!field.appearance.colspan) return 1;
    
    if(width<1024 && width>768){
      //if small-screen colspan it's not defined, 
      // the colspan wll be twice than on desktop's
      
      return  null || (field.appearance.colspan+1);
    }else if(width<=768){
      return 12 || (field.appearance.colspan*2);
    }
    return field.appearance.colspan;
    */
  }

  ngOnDestroy(){
  //  this.dragService.destroy('nested-bag');
  }

  ngOnInit() {
    // console.log("formObject",this.form);
    this.updateFormGroup();
    if (this.formGroup) {
      this.initialValues = this.formGroup.value;
    }
  }

  ngOnChanges(){
    this.updateFormGroup();
    if (this.formGroup) {
      this.initialValues = this.formGroup.value;
    }
  }

  resetForm() {
    console.log("ds");
    this.formGroup.reset(
      this.initialValues
    );
  }

  updateFormGroup() {
    try {
      this.formGroup = this.fcService.toFormGroup(this.form);
      this.formfields= this.fcService.getFields(this.form);
    } catch (e) {
      if (e instanceof FormError) console.log("Error generando el formulario");
      else throw e;

    }
  }

  
  markFormGroupAsTouched(formGroup:FormGroup){
    const controls=formGroup.controls;
      Object.keys(controls).forEach(key=>{
        controls[key].markAsTouched();
      });
      
    
  }

  onSubmit() {
 
  
    if(this.formGroup.invalid!){
      //mark everyfield as touched, so errors will be displayed in the ui
      this.markFormGroupAsTouched(this.formGroup);
      return;
    }

    this.alertService.showDialog(null,null);
    
    console.log("group",this.formGroup.controls);    
    console.log("preformData", this.formGroup.value);
    const formData = this.fcService.getFormGroupData(this.formGroup,this.formfields);
    console.log("formData",JSON.stringify (formData ));

    this.formService.saveFormData(formData,this.form.id)
     
      //.finally(() => console.log("final2"))
      .subscribe(
      x => {
        console.log("success", x);
        
      },
      e => console.log("error", e),
      () => console.log("final")
      );

  }
}

/*

import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'times' })
export class TimesPipe implements PipeTransform {
  transform(value: number): any {
    const iterable = {};
    iterable[Symbol.iterator] = function* () {
      let n = 0;
      while (n < value) {
        yield ++n;
      }
    };
    return iterable;
  }
}
*/