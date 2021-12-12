import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ControlComponent } from './components/control/control.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ProductoComponent } from './components/producto/producto.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { PagoComponent } from './components/pago/pago.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ControlComponent,
    VendedorComponent,
    ClienteComponent,
    ProductoComponent,
    PedidoComponent,
    PagoComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule
  ]
})
export class AdministradorModule { }
