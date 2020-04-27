import { Component } from '@angular/core';
import {NgxFirebaseClientService} from '@ngx-firebase/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-firebase';
  constructor(private firebase: NgxFirebaseClientService) {
    this.firebase.firestore().collection('test').add({tester: 2});
  }
}
