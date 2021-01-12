import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { FacturesModule } from './factures/factures.module';
import { ClientsModule } from './clients/clients.module';
import { ProduitsModule } from './produits/produits.module';
import { FournisseursModule } from './fournisseurs/fournisseurs.module';
import { ParametresModule } from './parametres/parametres.module';
import { SharedModule } from '../shared/shared.module';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ProtectedRoutingModule,
    DashboardModule,
    FacturesModule,
    ClientsModule,
    ProduitsModule,
    FournisseursModule,
    ParametresModule,
    MainModule,
    AppRoutingModule
  ]
})
export class ProtectedModule { }
