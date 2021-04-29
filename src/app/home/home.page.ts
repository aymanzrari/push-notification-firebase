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
      "to": "eNOKTbprRgWRltKELcF0HU:APA91bHPSy2wOIaY96II6nIuVNA8Q96ODm0_3-BjIkOv8ZyA6ANGBRl7Cfn2TAyDKmSKHABEPGuh1i_OvbiyFroB19LttEuBvSaqVO-Q3X_umSfMkYyJJ4sOIcSOenW3Mtoy_-ZV_Cpf"
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'key=AAAAdqZSa8E:APA91bH4qK3TjWBzcGY5Najk-4hSaNLrHhDWTvN19kAiC2S1Uz8uXXdDUgr8WygrczKhRNiK22zeLjWVQODL55tYqov8diOwrwSwipSFugiMkQugdtKQHxTOM9hVGKQ95cOAQd3kaqxb'
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