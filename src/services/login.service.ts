import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { RequestParameterModel } from 'src/models/request-parameter-model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  totalAngularPackages;
  constructor(
    private http: HttpClient) // private api: ApiService
  {
  }

  signIn = function (mail, password) {
    // Burası hatalı çözemedim henüz. 
    debugger;
    let param = new HttpParams();
    param.set('mail', mail);
    param.set('password', password);
    this.http.get('http://localhost:8080/login',{params: param}).subscribe((data) => {
      debugger;
      console.log(data);
    });
  };
}
