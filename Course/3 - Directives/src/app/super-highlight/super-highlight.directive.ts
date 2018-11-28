import { Directive, HostBinding, ElementRef,HostListener } from '@angular/core';


@Directive({
  selector: '[appSuperHighlight]'
})
export class SuperHighlightDirective {
  @HostBinding('style.backgroundColor') ourBackgroundColor:string = 'transparent' //we create our own property that we are binding to
  //in brackets we past to which propery of hosting element we want to bind, such as a style.backgroundColor (note camel case - dome doenst dashes)
  constructor(private elRef:ElementRef) {};

  @HostListener('mouseenter') whenMouseOver(eventData: Event) {
    this.ourBackgroundColor = 'lime'; //now we simply assing the property
  }
  @HostListener('mouseleave') whenMouseLeft(eventData: Event) {
    this.ourBackgroundColor = 'transparent';
  }
}
