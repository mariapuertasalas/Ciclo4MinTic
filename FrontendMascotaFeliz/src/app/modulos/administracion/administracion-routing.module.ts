import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { ListarMascotaComponent } from './mascotas/listar-mascota/listar-mascota.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';
import { ListarPlanComponent } from './planes/listar-plan/listar-plan.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';
import { ListarProductoComponent } from './productos/listar-producto/listar-producto.component';
import { CrearSucursalComponent } from './sucursales/crear-sucursal/crear-sucursal.component';
import { BuscarSucursalComponent } from './sucursales/buscar-sucursal/buscar-sucursal.component';
import { EditarSucursalComponent } from './sucursales/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursales/eliminar-sucursal/eliminar-sucursal.component';
import { ListarSucursalComponent } from './sucursales/listar-sucursal/listar-sucursal.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { ListarUsuarioComponent } from './usuarios/listar-usuario/listar-usuario.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'crear-mascota', component:CrearMascotaComponent},
  { path: 'buscar-mascota', component:BuscarMascotaComponent},
  { path: 'editar-mascota', component:EditarMascotaComponent},
  { path: 'eliminar-mascota', component:EliminarMascotaComponent},
  { path: 'listar-mascota', component:ListarMascotaComponent},
  { path: 'crear-plan', component:CrearPlanComponent},
  { path: 'buscar-plan', component:BuscarPlanComponent},
  { path: 'editar-plan', component:EditarPlanComponent},
  { path: 'eliminar-plan', component:EliminarPlanComponent},
  { path: 'listar-plan', component:ListarPlanComponent},
  { path: 'crear-producto', component:CrearProductoComponent},
  { path: 'buscar-producto', component:BuscarProductoComponent},
  { path: 'editar-producto', component:EditarProductoComponent},
  { path: 'eliminar-producto', component:EliminarProductoComponent},
  { path: 'listar-producto', component:ListarProductoComponent},
  { path: 'crear-sucursal', component:CrearSucursalComponent},
  { path: 'buscar-sucursal', component:BuscarSucursalComponent},
  { path: 'editar-sucursal', component:EditarSucursalComponent},
  { path: 'eliminar-sucursal', component:EliminarSucursalComponent},
  { path: 'listar-sucursal', component:ListarSucursalComponent},
  { path: 'crear-usuario', component:CrearUsuarioComponent},
  { path: 'buscar-usuario', component:BuscarUsuarioComponent},
  { path: 'editar-usuario', component:EditarUsuarioComponent},
  { path: 'eliminar-usuario', component:EliminarUsuarioComponent},
  { path: 'listar-usuario', component:ListarUsuarioComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }