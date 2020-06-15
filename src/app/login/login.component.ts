import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { Router } from '@angular/router';
import { Helper } from 'src/helpers/helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  mail:string;
  password:string;
  constructor(
    private router: Router,
    private loginService: LoginService,
    private helper: Helper
  ) {
   }

  ngOnInit(): void {
    if(this.helper.getCookie('userInfo')){
      this.router.navigate(['/app']);
    }
  }

  signIn = async function() {
    let result = await this.loginService.signIn(this.mail,this.password);
    if(result.success){
      console.log(result.data);
      this.helper.setCookie('userInfo',JSON.stringify(result.data),7)
      this.router.navigate(['/app']);
    }
    else{
      console.error('Login Error: ',result);
      alert(result.message);
    }
  }
}
