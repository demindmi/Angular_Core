import { Component, OnInit, Output,EventEmitter,ViewChild,ElementRef  } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() blueprintCreated = new EventEmitter<{servername:string, serverContent:string}>();
  @Output() serverCreated = new EventEmitter<{servername:string, serverContent:string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('ServerContentInput')InternalServerContentInput : ElementRef;
  
  constructor() { }

  ngOnInit() {
  }

  onAddServer(servernameInput:HTMLInputElement) {
    this.serverCreated.emit({
      servername: servernameInput.value, 
      serverContent: this.InternalServerContentInput.nativeElement.value});
  }

  onAddBlueprint(servernameInput:HTMLInputElement) {
    this.blueprintCreated.emit({
      servername: servernameInput.value, 
      serverContent: this.InternalServerContentInput.nativeElement.value});
  }
}
