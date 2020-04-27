import {Inject, Injectable} from '@angular/core';
import * as firebase from 'firebase/app';

// todo setup dynamic imports
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class NgxFirebaseClientService {
  get firebase() {
    if (! firebase.apps.length) {
      firebase.initializeApp(this.firebaseConfig);
    }
    return firebase;
  }
  constructor(@Inject('firebaseConfig') private firebaseConfig: any) {
  }

  auth() {
    return this.firebase.auth();
  }

  storage() {
    return this.firebase.storage();
  }

  firestore() {
    return this.firebase.firestore();
  }
}
