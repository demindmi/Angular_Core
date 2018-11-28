import { Directive, HostBinding, ElementRef,HostListener,Input,OnInit} from '@angular/core';

@Directive({
  selector: '[appUltraHighlight]'
})
export class UltraHighlightDirective implements OnInit{
  @Input() deafultColor:string = 'transparent';
  @Input() higlightColor:string = 'pink';
  @HostBinding('style.backgroundColor') ourBackgroundColor:string; //we create our own property that we are binding to
  //in brackets we past to which propery of hosting element we want to bind, such as a style.backgroundColor (note camel case - dome doenst dashes)
  constructor(private elRef:ElementRef) {};

  ngOnInit(): void {
    this.ourBackgroundColor = this.deafultColor;
  }

  @HostListener('mouseenter') whenMouseOver(eventData: Event) {
    this.ourBackgroundColor = this.higlightColor; //now we simply assing the property
  }
  @HostListener('mouseleave') whenMouseLeft(eventData: Event) {
    this.ourBackgroundColor = this.deafultColor;
  }
}
