import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [
        `
        .online {
            color: white;
        },

        `,
    ]
})
export class ServerComponent {

    serverId: number;
    serverStatus: string;

    constructor() {
        this.serverId = Math.ceil(Math.random() * 1000);
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(): string {
        return this.serverStatus;
    }

    getColor(): string {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

}
