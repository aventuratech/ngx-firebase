import {ModuleWithProviders, NgModule} from '@angular/core';
import {NgxFirebaseClientService} from './client.service';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
})
export class NgxFirebaseClientModule {
  static forRoot(firebaseConfig): ModuleWithProviders {
    return {
      ngModule: NgxFirebaseClientModule,
      providers: [
        NgxFirebaseClientService,
        {
          provide: 'firebaseConfig',
          useValue: firebaseConfig
        }
      ]
    };
  }
}
