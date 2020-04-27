import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxFirebaseClientModule} from '@ngx-firebase/client';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxFirebaseClientModule.forRoot({
      apiKey: "AIzaSyCIDxuAjp2qTP11F8SVQE6yha1k_HdFCIY",
      authDomain: "educatio-782c9.firebaseapp.com",
      databaseURL: "https://educatio-782c9.firebaseio.com",
      projectId: "educatio-782c9",
      storageBucket: "educatio-782c9.appspot.com",
      messagingSenderId: "122584558364",
      appId: "1:122584558364:web:37372d466434377d0468d9",
      measurementId: "G-D1VL2CTP8F"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
