import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PedidoComponent } from './components/pedido/pedido.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PedidoComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
