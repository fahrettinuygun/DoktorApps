import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

  getProfileInfo(userId){
    console.log('profile service userId:', userId);
    return new Promise(resolve =>{
      this.http.get<any>("http://localhost:8080/profile",{params: {userId: userId}}).subscribe(result => {
        console.log('service result',result)
        resolve(result);
        });
    })
  }
}
