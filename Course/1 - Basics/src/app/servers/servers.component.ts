import { Component, OnInit } from '@angular/core';
import { ArrayType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer : boolean = false;
  serverCreationStatus : string= 'No Server was created';
  serverName : string = 'Name here';
  serverCreated : boolean = false;
  servers : any = ['TestServer', 'TestServer 2', 'Dev Server'];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'Server  ' + this.serverName + ' was created!';
  }
  
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
