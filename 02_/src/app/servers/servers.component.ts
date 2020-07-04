import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'testServerName';
  serverCreated = false;
  servers = ['TestServer1', 'TestServer2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! The name is ${this.serverName}`;
  }

  obUpdateServerName(event: Event) {
    this.serverName = (event?.target as HTMLInputElement)?.value;
  }

}
