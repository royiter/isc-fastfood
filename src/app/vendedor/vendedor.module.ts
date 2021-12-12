import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendedorRoutingModule } from './vendedor-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { PagoComponent } from './components/pago/pago.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ClienteComponent,
    PedidoComponent,
    PagoComponent
  ],
  imports: [
    CommonModule,
    VendedorRoutingModule
  ]
})
export class VendedorModule { }
