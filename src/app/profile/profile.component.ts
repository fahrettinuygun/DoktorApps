import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/helpers/helper';
import { ProfileService } from 'src/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public profile:any;
  constructor(
    private helper: Helper,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    if(this.profile == null){
      const userInfo = this.helper.getCookie('userInfo');
      if(userInfo && JSON.parse(userInfo).user.uid){
        this.getProfileInfo(JSON.parse(userInfo).user.uid);
      }
    }
  }

  async getProfileInfo(userId){
    await this.profileService.getProfileInfo(userId).then((result : {success:boolean,message:string,data:string}) => {
      if(result.data){
        this.profile = JSON.parse(result.data);
        console.log('profile',this.profile);
      }
    }).catch(error => {
      console.error('profile component getprofileinfo error : ',error);
    });
  }

}
