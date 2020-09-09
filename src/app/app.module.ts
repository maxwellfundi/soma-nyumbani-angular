import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TodaySessionsComponent } from './today-sessions/today-sessions.component';
import { AllSessionsComponent } from './all-sessions/all-sessions.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { TodayComponent } from './today/today.component';
import { NextComponent } from './next/next.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    TodaySessionsComponent,
    AllSessionsComponent,
      AboutComponent,
      TeamComponent,
      TodayComponent,
      NextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
