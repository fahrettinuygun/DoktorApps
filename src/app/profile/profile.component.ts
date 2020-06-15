import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/helpers/helper';
import { ProfileService } from 'src/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private helper: Helper,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    const userInfo = this.helper.getCookie('userInfo');
    console.log('UserInfo from cookie', userInfo);
    if(userInfo && JSON.parse(userInfo).user.uid){
      this.getProfileInfo(JSON.parse(userInfo).user.uid);
    }
  }

  async getProfileInfo(userId){
    console.log('profile component getProfileInfo', userId)
    let result = await this.profileService.getProfileInfo(userId).then(result => {
      console.log('profile component getprofileinfo result : ',result);
    }).catch(error => {
      console.error('profile component getprofileinfo error : ',error);
    });
  }

}
