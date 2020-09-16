import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { AllSessionsComponent } from './all-sessions/all-sessions.component';
import { TodayComponent } from './today/today.component';
import { NextComponent } from './next/next.component';

const routes: Routes = [
  { 
    path: "",
    component: HomeComponent
      },
  {
    path: "team",
    component: TeamComponent
  }, 
  {
    path: "all-sessions", 
    component: AllSessionsComponent
      },

      {
        path: "today",
        component: TodayComponent
      } , 
  {
    path: "next",
    component: NextComponent
  }, 
      {
        path: "**", 
        redirectTo: ""
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
