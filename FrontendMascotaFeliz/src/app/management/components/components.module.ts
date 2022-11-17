import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HeaderMgmtComponent } from './header-mgmt/header-mgmt.component';
import { MenuMgmtComponent } from './menu-mgmt/menu-mgmt.component';


@NgModule({
  declarations: [
    HeaderMgmtComponent,
    MenuMgmtComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
