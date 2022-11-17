import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComercialRoutingModule } from './comercial-routing.module';
import { ContactosPageComponent } from './contactos-page/contactos-page.component';
import { ProductosServiciosPageComponent } from './productos-servicios-page/productos-servicios-page.component';


@NgModule({
  declarations: [
    ContactosPageComponent,
    ProductosServiciosPageComponent
  ],
  imports: [
    CommonModule,
    ComercialRoutingModule
  ]
})
export class ComercialModule { }
