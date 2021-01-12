import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashboardComponent } from './dashboard/main-dashboard/main-dashboard.component';
import { MainFcComponent } from './factures/main-fc/main-fc.component';

const routes: Routes = [
  { path: 'dashboard', component: MainDashboardComponent },
  { path: 'factures', component: MainFcComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
