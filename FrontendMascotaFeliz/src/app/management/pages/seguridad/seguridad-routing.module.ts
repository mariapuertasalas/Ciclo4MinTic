import { CambioClavePageComponent } from './cambio-clave-page/cambio-clave-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'cambio-clave-page', component:CambioClavePageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadPageRoutingModule { }
