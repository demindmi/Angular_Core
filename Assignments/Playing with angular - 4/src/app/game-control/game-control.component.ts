import { Component, OnInit,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  @Output() gameStarted = new EventEmitter<number>(); //we careted event that can be listen from outside of this component
  lastNumber:number = 0;
  StartdisabledInClass = false;
  StopdisabledInClass = true;

  constructor() { }

  ngOnInit() {
  }
  ButtonsToggle(){
    this.StartdisabledInClass = !this.StartdisabledInClass;
    this.StopdisabledInClass = !this.StopdisabledInClass;
  }

  StartGame(){
    this.ButtonsToggle();
    this.interval = setInterval(()=>{ //evey 1 second
      this.gameStarted.emit(this.lastNumber+1); //will emit even that increments a number by 1
      this.lastNumber++;
    },1000)
  }

  StopGame(){
    this.ButtonsToggle();
    clearInterval(this.interval);
  }


}
