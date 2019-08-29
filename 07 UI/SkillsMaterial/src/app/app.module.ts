import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from './hello/hello.component';
import { SkillsComponent } from './skills/skills.component';
import { KpibarComponent } from './kpibar/kpibar.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, SkillsComponent, KpibarComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
