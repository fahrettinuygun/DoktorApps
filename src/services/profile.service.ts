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
    return new Promise(resolve =>{
      try {
      this.http.get<any>("http://localhost:8080/profile",{params: {userId: userId}}).subscribe(result => {
        resolve(result);
        });
      } catch (error) {
        resolve("profileService Error: " + error);
      }
    })
  }
}
