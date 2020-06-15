import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/helpers/helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private helper: Helper,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  logOut(){
    this.helper.setCookie('userInfo',"",0);
    this.router.navigate(['/login']);
  }
}
