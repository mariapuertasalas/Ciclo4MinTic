import { SignOutComponent } from './sign-out/sign-out.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { LoginComponent } from './login/login.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'cambio-clave', component:CambioClaveComponent},
  { path: 'login', component:LoginComponent},
  { path: 'recuperar-clave', component:RecuperarClaveComponent},
  { path: 'sign-out', component:SignOutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
