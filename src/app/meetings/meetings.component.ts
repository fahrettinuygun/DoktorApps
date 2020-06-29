import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/helpers/helper';
import { MeetingService } from 'src/services/meeting.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {
  collapseId = -1;
  public meetings:any;
  constructor(
    private helper: Helper,
    private meetingService: MeetingService
    ) { }

  ngOnInit(
  ): void {
    if(this.meetings == null){
      const userInfo = this.helper.getCookie('userInfo');
      if(userInfo && JSON.parse(userInfo).user.uid){
        this.getMeetings(JSON.parse(userInfo).user.uid);
      }
    }
  }

  async getMeetings(userId){
    await this.meetingService.getMeetings(userId).then((result : {success:boolean,message:string,data:string}) => {
      if(result.data){
        this.meetings = JSON.parse(result.data);
        this.meetings.forEach(meeting => {
          console.log(meeting.appointmentDate);
        });
        console.log('meetings',this.meetings);
      }
    }).catch(error => {
      console.error('meetings component getMeetings error : ',error);
    });
  }

  collapse = function (id) {
    if(this.collapseId !== id)
      this.collapseId = id;
    else
      this.collapseId = -1;
  }

}
