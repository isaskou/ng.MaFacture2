import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashboardComponent } from './protected/dashboard/main-dashboard/main-dashboard.component';
import { MainFcComponent } from './protected/factures/main-fc/main-fc.component';
import { HomeComponent } from './public/home/home/home.component';
import { LoginComponent } from './public/login/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: MainDashboardComponent },
  { path: 'factures', component: MainFcComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
