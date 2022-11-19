import { SeguridadPageRoutingModule } from './management/pages/seguridad/seguridad-routing.module';

import { PagesRoutingModule } from './template/pages/pages-routing.module';

import { AdministracionRoutingModule } from './management/pages/administracion/administracion-routing.module';
import { ComercialRoutingModule } from './management/pages/comercial/comercial-routing.module';
import { SeguridadRoutingModule } from './modulos/seguridad/seguridad-routing.module';
import { ErrorComponent } from './template/pages/error/error.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  },
  {
    path: "**",
    component: ErrorComponent
  },
  {
    path: "pages",
    loadChildren: () => import("./template/pages/pages.module").then(x => x.PagesModule)
  },
  {
    path: "seguridad",
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
  },
  {
    path: "administracion",
    loadChildren: () => import("./management/pages/administracion/administracion.module").then(x => x.AdministracionModule)
  },
  {
    path: "comercial",
    loadChildren: () => import("./management/pages/comercial/comercial.module").then(x => x.ComercialModule)
  },
  {
    path: "seguridad-pages",
    loadChildren: () => import("./management/pages/seguridad/seguridad.module").then(x => x.SeguridadPageModule)
  },

];

@NgModule({
  imports: [
    AdministracionRoutingModule,
    ComercialRoutingModule,
    SeguridadRoutingModule,
    PagesRoutingModule,
    SeguridadPageRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
