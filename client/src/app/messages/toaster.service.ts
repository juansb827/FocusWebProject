import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Component, OnInit,ViewEncapsulation} from '@angular/core';

let snackBarMessage :string;
@Injectable()
export class ToasterService {

    constructor(private snackBar: MdSnackBar) {
    }

    showToaster(msg: string,_duration=3000) {
        snackBarMessage=msg;
        this.snackBar.openFromComponent(SnackbarComponent, {
            duration: _duration,
        })
    }
}



@Component({
    
    selector: 'snack-bar-component-example-snack',
    template: `
  <span class="example-pizza-party snackbar">
        {{text}}
  </span>` ,
    styles: [` 
.example-pizza-party {  
  font-size:2em;
}


`]

})
export class SnackbarComponent implements OnInit {
    
    text:string;

    ngOnInit() {
        this.text = snackBarMessage;
    }
}