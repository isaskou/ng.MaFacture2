import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MainModule } from '../main/main.module';



@NgModule({
  declarations: [MainDashboardComponent],
  imports: [
    SharedModule,
    MainModule
  ]
})
export class DashboardModule { }
