import { ContentChild,ViewChild, Component, OnInit, Input, ViewEncapsulation, OnDestroy, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, ElementRef } from '@angular/core';




@Component({
  selector: 'app-serverelement',
  templateUrl: './serverelement.component.html',
  styleUrls: ['./serverelement.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerelementComponent implements OnInit, OnChanges,OnDestroy, DoCheck, AfterContentInit,AfterContentChecked, AfterViewChecked, AfterViewInit {
  @Input('srvr') element: {
    type:string,
    name:string,
    content:string
  };
  @Input() name:string;
  @ViewChild('heading') header:ElementRef;
  @ContentChild('contentParagraph') paragraph:ElementRef;

  constructor() {
    console.log("Constructor called");
   }
   
   ngOnChanges(changes: SimpleChanges): void {
    console.log("on changes ")
    console.log(changes);
   }

  ngOnInit() {
    console.log('On Init')

  }

  ngDoCheck(){
    console.log('do check called')
  }
  ngAfterContentInit(){
    console.log("after content init")
    console.log(this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked(){
    console.log("afet content checked")
  }
  ngAfterViewChecked(){
    console.log("after view checked")
  }
  ngAfterViewInit(){
    console.log("afet view inti")
    console.log(this.header.nativeElement.textContent);
  }

  ngOnDestroy(): void {
    console.log('Destroyed')
  }

}
