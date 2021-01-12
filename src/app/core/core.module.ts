import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from '../public/public.module';
import { ProtectedModule } from '../protected/protected.module';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    SharedModule,
    PublicModule,
    ProtectedModule
  ],
  exports: [FooterComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded.');
    }
  }
}
