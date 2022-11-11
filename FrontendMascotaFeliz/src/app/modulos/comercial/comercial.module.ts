import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComercialRoutingModule } from './comercial-routing.module';
import { CrearServicioComponent } from './servicios/crear-servicio/crear-servicio.component';
import { BuscarServicioComponent } from './servicios/buscar-servicio/buscar-servicio.component';
import { EditarServicioComponent } from './servicios/editar-servicio/editar-servicio.component';
import { EliminarServicioComponent } from './servicios/eliminar-servicio/eliminar-servicio.component';
import { ListarServicioComponent } from './servicios/listar-servicio/listar-servicio.component';
import { CrearContactoComponent } from './contactos/crear-contacto/crear-contacto.component';
import { BuscarContactoComponent } from './contactos/buscar-contacto/buscar-contacto.component';
import { EditarContactoComponent } from './contactos/editar-contacto/editar-contacto.component';
import { EliminarContactoComponent } from './contactos/eliminar-contacto/eliminar-contacto.component';
import { ListarContactoComponent } from './contactos/listar-contacto/listar-contacto.component';


@NgModule({
  declarations: [
    CrearServicioComponent,
    BuscarServicioComponent,
    EditarServicioComponent,
    EliminarServicioComponent,
    ListarServicioComponent,
    CrearContactoComponent,
    BuscarContactoComponent,
    EditarContactoComponent,
    EliminarContactoComponent,
    ListarContactoComponent
  ],
  imports: [
    CommonModule,
    ComercialRoutingModule
  ]
})
export class ComercialModule { }
