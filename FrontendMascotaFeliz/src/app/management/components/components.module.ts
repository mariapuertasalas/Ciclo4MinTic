import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ContactoMgmtComponent } from './contacto-mgmt/contacto-mgmt.component';


@NgModule({
  declarations: [
  
    ContactoMgmtComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
