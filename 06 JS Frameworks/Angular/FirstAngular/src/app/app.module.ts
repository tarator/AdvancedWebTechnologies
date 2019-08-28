import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SkillDetailsComponent } from './skill-details/skill-details.component';

@NgModule({
	declarations: [ AppComponent, SkillsComponent, NavbarComponent, SkillDetailsComponent ],
	imports: [ BrowserModule, AppRoutingModule, FormsModule, HttpClientModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
