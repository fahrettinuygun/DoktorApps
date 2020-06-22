import { Component, OnInit } from '@angular/core';
declare const JitsiMeetExternalAPI:any;
@Component({
  selector: 'app-videocall',
  templateUrl: './videocall.component.html',
  styleUrls: ['./videocall.component.scss']
})
export class VideocallComponent implements OnInit {
  public api;
  constructor() { 
  }

  ngOnInit(): void {
    const domain = 'meet.jit.si';
    const options = {
        roomName: 'JitsiMeetAPIExample',
        width: 700,
        height: 700,
        parentNode: document.querySelector('#meet')
    };
    this.api = new JitsiMeetExternalAPI(domain, options);
  }

}
