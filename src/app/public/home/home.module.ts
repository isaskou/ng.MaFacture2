import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeFeatureCardComponent } from './home-feature-card/home-feature-card.component';
import { HomeFeaturesComponent } from './home-features/home-features.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';



@NgModule({
  declarations: [HomeComponent, HomeBannerComponent, HomeFeatureCardComponent, HomeFeaturesComponent],
  imports: [
    SharedModule,
    ButtonsModule.forRoot()
  ]
})
export class HomeModule { }
