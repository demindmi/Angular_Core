import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online{
        color:white;
    }
    .ofline{
        color:yellow;
    }
    `]
})

export class ServerComponent{
    serverId: number = 10;
    serverStauts: string = '';

    constructor(){
        this.serverStauts = Math.random() > 0.5 ? 'online':'offline'; 
    }

    getServerStatus() {
        return this.serverStauts;
    }

    getColor(){
        return this.serverStauts === 'online' ? 'green' : 'red';
    }
}