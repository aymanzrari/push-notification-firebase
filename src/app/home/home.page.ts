import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  constructor(private http: HttpClient) { }

  
  sendNotif() {
    let body = {
      "notification": {
        "title": "Match update Test Notification",
        "body": "Barcelona goal in added time, score is now 3-0"
      },
      "data": {
        "text": "hey there",
        "titre": "test"
      },
      "to": environment.userToken
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'key='+environment.key
      })
    };
    
    this.http.post('https://fcm.googleapis.com/fcm/send', body,httpOptions).subscribe(res => {
      alert(res);
      console.log("Res Success");
      console.log(res);
    }), err => {
      alert(err);
      console.log("Res Error");
      console.log(err);
    }
  }

}