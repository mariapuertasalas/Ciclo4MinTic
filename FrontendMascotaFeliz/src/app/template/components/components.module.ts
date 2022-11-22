import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HeaderPageComponent } from './header-page/header-page.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { HeaderRegistrarseComponent } from './header-registrarse/header-registrarse.component';
import { ServiciosPreciosComponent } from './servicios-precios/servicios-precios.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';


@NgModule({
  declarations: [
    HeaderPageComponent,
    QuienesSomosComponent,
    HeaderRegistrarseComponent,
    ServiciosPreciosComponent,
    SocialNetworksComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
