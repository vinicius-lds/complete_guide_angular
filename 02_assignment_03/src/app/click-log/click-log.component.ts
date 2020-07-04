import { Component } from '@angular/core';

@Component({
  selector: 'app-click-log',
  templateUrl: './click-log.component.html',
  styleUrls: ['./click-log.component.css']
})
export class ClickLogComponent {

  private _clickStatus: boolean;

  logs: string[];

  constructor() {
    this.logs = [];
  }

  onClick(): void {
    this.clickStatus = !this.clickStatus;
    this.logs.push(new Date().toUTCString());
  }

  get clickStatus(): boolean {
     return this._clickStatus;
  }

  set clickStatus(value: boolean) {
    this._clickStatus = value;
  }

}
