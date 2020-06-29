import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(
    private http: HttpClient
    ) { }

  getMeetings(userId){
    return new Promise(resolve =>{
      try {
      this.http.get<any>("http://localhost:8080/meetings",{params: {userId: userId}}).subscribe(result => {
        resolve(result);
        });
      } catch (error) {
        resolve("meetingService Error: " + error);
      }
    })
  }
}
