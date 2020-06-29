import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/helpers/helper';
import { MeetingService } from 'src/services/meeting.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  collapseId = -1;
  public patients:any;
  constructor(
    private helper: Helper,
    private meetingService: MeetingService
    ) { }

  ngOnInit(): void {
    if(this.patients == null){
      const userInfo = this.helper.getCookie('userInfo');
      if(userInfo && JSON.parse(userInfo).user.uid){
        this.getMeetings(JSON.parse(userInfo).user.uid);
      }
    }
  }

  async getMeetings(userId){
    await this.meetingService.getMeetings(userId).then((result : {success:boolean,message:string,data:string}) => {
      if(result.data){
        this.patients = JSON.parse(result.data);
        this.patients.forEach(meeting => {
          console.log(meeting.appointmentDate);
        });
        console.log('patients',this.patients);
      }
    }).catch(error => {
      console.error('patients component getMeetings error : ',error);
    });
  }

  collapse = function (id) {
    if(this.collapseId !== id)
      this.collapseId = id;
    else
      this.collapseId = -1;
  }
}
