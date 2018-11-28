import { Directive,ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[AppBasicHighlight]', // we put square brakets around m since we dont 
    //select it by element, but by attribue - with this it will be recognized 
    //without brackets in html
})
export class BasicHighlightDirective{
    constructor(private elementRef:ElementRef){} //remeber this short cut(keyword private)
    //this will not only recive it as argument but assignt it to this property of class
    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'yellow';
        //you see us referencing elementRef even tho it doesnt exist in this class, beacuse
        //it got created in the constructor as a shortcuе        
    }
}