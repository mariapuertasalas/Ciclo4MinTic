
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MascotasPageComponent } from './mascotas-page/mascotas-page.component';
import { PlanesPageComponent } from './planes-page/planes-page.component';
import { ProductosPageComponent } from './productos-page/productos-page.component';
import { SucursalesPageComponent } from './sucursales-page/sucursales-page.component';
import { UsuariosPageComponent } from './usuarios-page/usuarios-page.component';

const routes: Routes = [
  { path: 'mascotas-page', component:MascotasPageComponent},
  { path: 'planes-page', component:PlanesPageComponent},
  { path: 'productos-page', component:ProductosPageComponent},
  { path: 'sucursales-page', component:SucursalesPageComponent},
  { path: 'usuarios-page', component:UsuariosPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
