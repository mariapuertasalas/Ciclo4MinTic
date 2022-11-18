import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactosPageComponent } from './contactos-page/contactos-page.component';
import { ProductosServiciosPageComponent } from './productos-servicios-page/productos-servicios-page.component';


const routes: Routes = [
  { path: 'contactos-page', component:ContactosPageComponent},
  { path: 'productos-servicios-page', component:ProductosServiciosPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComercialRoutingModule { }
