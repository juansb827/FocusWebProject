import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ad-host]',
})
export class MyFormDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }

}