import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers:number[] = [];
  evenNumbers:number[] = [];

  onGameStart(incrementedNumber:number){ //this function is getting called every time event is emmited in app component html
    if(incrementedNumber%2===0)
      this.oddNumbers.push(incrementedNumber);
    else
      this.evenNumbers.push(incrementedNumber);
  }
}
