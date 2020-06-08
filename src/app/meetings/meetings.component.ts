import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {
  collapseId = 0;
  constructor() { }

  ngOnInit(): void {
  }

  collapse = function (id) {
    if(this.collapseId !== id)
      this.collapseId = id;
    else
      this.collapseId = 0;
  }

}
