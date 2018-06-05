import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import { MatDialog } from '@angular/material';
import {DialogComponent} from './dialog.component'

let snackBarMessage :string;
@Injectable()
export class AlertService {

    constructor(public dialog: MatDialog) {
    }

    showDialog(type:string, msg:string){
        this.dialog.open(DialogComponent, {width: '50%'});

    }

   
}
