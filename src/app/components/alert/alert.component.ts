import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  caption: string;
  message: string;
  type: string;
  isProcessing: boolean;

  constructor() {
   }

  setMessage(caption: string, message: string, type: string, isProcess = false) {
    this.message = message;
    this.caption = caption;
    this.type = type;
    this.isProcessing = isProcess;

    if (!isProcess) {
      // clear message after few seconds (timout time cinfigured in environment file)
      setTimeout(() => {
        this.clear();
      }, 4000);
    }
  }


  clear() {
    this.caption = '';
    this.message = '';
    this.type = '';
  }

  ngOnInit() {
  }

}
