import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/helpers/helper';
import { Router } from '@angular/router';
import { ProfileService } from 'src/services/profile.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public profile:any;

  constructor(
    private helper: Helper,
    private router: Router,
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


  logOut(){
    this.helper.setCookie('userInfo',"",0);
    this.router.navigate(['/login']);
  }
}
