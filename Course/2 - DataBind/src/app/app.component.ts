import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'tester', content:'just a test'}];

  onServerAdded(serverData: {servername:string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.servername,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {servername:string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.servername,
      content: blueprintData.serverContent
    });
  }

  onChangesFunction(){
    this.serverElements[0].name = 'changed';
  }

  OnDestry(){
    this.serverElements.splice(0,1);
  }
}
