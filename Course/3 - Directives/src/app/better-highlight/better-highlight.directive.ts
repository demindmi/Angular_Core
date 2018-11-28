import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','red'); //for this to work we have to have the element that we want to style
    //for this we use elRef(reference)
    //in essense 1st arg  - what element,
    //           2nd arg  - which style, 
    //           3rd arg  - value of style.
    //  OPTIONAL 4th arg  - things like '!important'
  }

  @HostListener('mouseenter') whenMouseOver(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
  }
  @HostListener('mouseleave') whenMouseLeft(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }
  //in () we specify the type of event - mouseetner(supported by DOM), and when mouse over we execute function 
  //with  internal name we chosen(whenMOuseOver), we alsp pass event info to it as an arguemnt
  // we then execute the code in the brackets

}
