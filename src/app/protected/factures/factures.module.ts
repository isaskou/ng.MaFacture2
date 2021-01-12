import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainFcComponent } from './main-fc/main-fc.component';
import { NavbarComponent } from '../main/navbar/navbar.component';
import { MainModule } from '../main/main.module';



@NgModule({
  declarations: [MainFcComponent],
  imports: [
    SharedModule,
    MainModule
  ],
  exports: [
    MainFcComponent
  ]
})
export class FacturesModule { }
