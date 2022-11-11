import { CrearContactoComponent } from './contactos/crear-contacto/crear-contacto.component';
import { BuscarContactoComponent } from './contactos/buscar-contacto/buscar-contacto.component';
import { EditarContactoComponent } from './contactos/editar-contacto/editar-contacto.component';
import { EliminarContactoComponent } from './contactos/eliminar-contacto/eliminar-contacto.component';
import { ListarContactoComponent } from './contactos/listar-contacto/listar-contacto.component';
import { CrearServicioComponent } from './servicios/crear-servicio/crear-servicio.component';
import { BuscarServicioComponent } from './servicios/buscar-servicio/buscar-servicio.component';
import { EditarServicioComponent } from './servicios/editar-servicio/editar-servicio.component';
import { EliminarServicioComponent } from './servicios/eliminar-servicio/eliminar-servicio.component';
import { ListarServicioComponent } from './servicios/listar-servicio/listar-servicio.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'crear-contacto', component:CrearContactoComponent},
  { path: 'buscar-contacto', component:BuscarContactoComponent},
  { path: 'editar-contacto', component:EditarContactoComponent},
  { path: 'eliminar-contacto', component:EliminarContactoComponent},
  { path: 'listar-contacto', component:ListarContactoComponent},
  { path: 'crear-servicio', component:CrearServicioComponent},
  { path: 'buscar-servicio', component:BuscarServicioComponent},
  { path: 'editar-servicio', component:EditarServicioComponent},
  { path: 'eliminar-servicio', component:EliminarServicioComponent},
  { path: 'listar-servicio', component:ListarServicioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComercialRoutingModule { }
