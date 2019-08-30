import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { RegisterComponent } from './firebase/login/register.component';
import { LoginComponent } from './firebase/login/login.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { MaterialModule } from './material.module';
import { AuthService } from './firebase/auth.service';
import { AuthInterceptor } from './auth.interceptor';
import { environment } from 'src/environments/environment';

@NgModule({
	declarations: [ AppComponent, RegisterComponent, LoginComponent, FirebaseComponent ],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpClientModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		MaterialModule
	],
	providers: [ AuthService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
