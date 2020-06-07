import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { Router } from '@angular/router';

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
  ) {
   }

  ngOnInit(): void {
  }

  signIn = function() {
    this.router.navigate(['/app']);
    // if(this.loginService.signIn(this.mail,this.password)){
    //   this.router.navigate(['/app']);
    // }
    // else{
    //   alert('Mail veya parola yanlış!');
    // }
  }
}
