import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  token: string = "";
  constructor(private platform: Platform, private fcm: FCM) {
    this.initializeApp();
    alert(localStorage.getItem("token"));
  }

  initializeApp() {
    this.platform.ready().then(() => {

      // subscribe to a topic
      this.fcm.subscribeToTopic('Deals');

      // get FCM token
      alert("First");
      this.fcm.getToken().then(token => {
        alert(token);
        this.token = token;
        localStorage.setItem("token", token);
        console.log(token);
      });

      // ionic push notification example
      alert("Second");
      this.fcm.onNotification().subscribe(data => {
        console.log(data);
        alert(data);
        if (data.wasTapped) {
          console.log('Received in background');
        } else {
          console.log('Received in foreground');
        }
      });

      // refresh the FCM token
      alert("Third");
      this.fcm.onTokenRefresh().subscribe(token => {
        alert(token);
        console.log(token);
        localStorage.setItem("token", token);
      });

      // unsubscribe from a topic
      this.fcm.unsubscribeFromTopic('Deals');

    });
  }
}
