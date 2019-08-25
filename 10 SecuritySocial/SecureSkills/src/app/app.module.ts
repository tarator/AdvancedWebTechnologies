import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";

import { RegisterComponent } from "./firebase/login/register.component";
import { LoginComponent } from "./firebase/login/login.component";
import { FirebaseComponent } from "./firebase/firebase.component";
import { MaterialModule } from "./material.module";
import { AuthService } from "./firebase/auth.service";
import { AuthInterceptor } from "./auth.interceptor";

export const firebaseConfig = {
  apiKey: "AIzaSyAOdenXy2X7kx9LWwVHk9zn3Humr2Cl9Tc",
  authDomain: "vouchers-c334a.firebaseapp.com",
  databaseURL: "https://vouchers-c334a.firebaseio.com",
  projectId: "vouchers-c334a",
  storageBucket: "vouchers-c334a.appspot.com",
  messagingSenderId: "269739409229"
};

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    FirebaseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    MaterialModule
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
