
import { PagesRoutingModule } from './template/pages/pages-routing.module';
import { AdministracionRoutingModule } from './modulos/administracion/administracion-routing.module';
import { ComercialRoutingModule } from './modulos/comercial/comercial-routing.module';
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
    path: "seguridad",
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
  },
  {
    path: "administracion",
    loadChildren: () => import("./modulos/administracion/administracion.module").then(x => x.AdministracionModule)
  },
  {
    path: "comercial",
    loadChildren: () => import("./modulos/comercial/comercial.module").then(x => x.ComercialModule)
  },
  {
    path: "pages",
    loadChildren: () => import("./template/pages/pages.module").then(x => x.PagesModule)
  }
];

@NgModule({
  imports: [
    AdministracionRoutingModule,
    ComercialRoutingModule,
    SeguridadRoutingModule,
    PagesRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
