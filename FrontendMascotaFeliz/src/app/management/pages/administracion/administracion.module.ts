import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { MascotasPageComponent } from './mascotas-page/mascotas-page.component';
import { PlanesPageComponent } from './planes-page/planes-page.component';
import { ProductosPageComponent } from './productos-page/productos-page.component';
import { SucursalesPageComponent } from './sucursales-page/sucursales-page.component';
import { UsuariosPageComponent } from './usuarios-page/usuarios-page.component';


@NgModule({
  declarations: [
    MascotasPageComponent,
    PlanesPageComponent,
    ProductosPageComponent,
    SucursalesPageComponent,
    UsuariosPageComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
