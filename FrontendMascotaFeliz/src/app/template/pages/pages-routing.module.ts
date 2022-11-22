import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactoPageComponent } from './contacto-page/contacto-page.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { QuienesSomosPageComponent } from './quienes-somos-page/quienes-somos-page.component';
import { ServiciosPageComponent } from './servicios-page/servicios-page.component';
import { RegistrarPageComponent } from './registrar-page/registrar-page.component';

const routes: Routes = [
  { path: 'contacto-page', component:ContactoPageComponent},
  { path: 'error', component:ErrorComponent},
  { path: 'home', component:HomeComponent},
  { path: 'quienes-somos-page', component:QuienesSomosPageComponent},
  { path: 'servicios-page', component:ServiciosPageComponent},
  { path: 'registrar-page', component:RegistrarPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
