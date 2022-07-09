import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  {path:"admin-signin",component:AdminSigninComponent},
  {path:"admin-signup",component:AdminSignupComponent},
  {path:"",component:HomeComponent},
  {path:"admin-dashboard",component:AdminDashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
