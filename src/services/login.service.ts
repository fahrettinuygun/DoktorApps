import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { RequestParameterModel } from 'src/models/request-parameter-model';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/models/response-model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  totalAngularPackages;
  constructor(
    private http: HttpClient) // private api: ApiService
  {
  }


  signIn(mail, password) {
    return new Promise(resolve =>{
      this.http.get<any>("http://localhost:8080/login",{params: {mail: mail, password: password}}).subscribe(result => {
        resolve(result);
        });
    })
  };
}
