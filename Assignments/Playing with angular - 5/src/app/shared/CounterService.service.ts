import { Output } from "@angular/core";

export class CounterService{
    fromActive:number = 0;
    @Output() fromInactive:number = 0;

    movedToActive(){
        this.fromActive++;
        console.log("Moves from Inactive to Active: " + this.fromActive);
    }
    movedToInactive(){
        this.fromInactive++;
        console.log("Moves from Active to Inactive: " + this.fromInactive);
    }
}