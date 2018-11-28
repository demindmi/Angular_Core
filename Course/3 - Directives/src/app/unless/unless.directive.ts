import { Directive,Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean){ // MUST SHARE NAME OF DIRECTIVE(appUnless)
    //this is just a setter of the property which is a method that gets called
    //when the property changes (w/e something outside of this component changes)
    if(!condition){
      this.viewContainerRef.createEmbeddedView(this.templateRef);//created a view in this view container
    }
    else{
      this.viewContainerRef.clear(); //clear if condition failed
    }
  } //we need (input)since we are receiving property from outside

  constructor(private templateRef:TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }
//template is what we need to render, 
//viewcontainer is what needs to be rendered
//note the private shortcut (same as public) - these fields are created for this component
}
