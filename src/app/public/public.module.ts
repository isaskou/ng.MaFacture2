import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PublicRoutingModule,
    HomeModule,
    LoginModule,
    HttpClientModule
  ]
})
export class PublicModule { }
