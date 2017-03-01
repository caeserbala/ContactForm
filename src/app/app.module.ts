import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponent } from '../app/form/form.component';
import { CustomFormsModule } from 'ng2-validation';
import {AngularFireModule} from 'angularfire2';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';
import { DisplayComponent } from './display/display.component';

export const firebaseConfig={
  
    apiKey: "AIzaSyDx3Z2g6afyfeXaWh8uOEFTcixb0-hDO-o",
    authDomain: "test-81308.firebaseapp.com",
    databaseURL: "https://test-81308.firebaseio.com",
    storageBucket: "test-81308.appspot.com",
    messagingSenderId: "294543722510"
  
}

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DisplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
