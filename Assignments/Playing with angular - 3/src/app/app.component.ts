import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display:boolean = false;
  log = [];

  onToggle(){
    //this.log.push(this.log.length +1);
    this.log.push(new Date());
    this.display = !this.display;
  }

  getClass(){}
}
