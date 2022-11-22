import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Components
import { SliderComponent } from './template/components/slider/slider.component';
import { HeaderComponent } from './template/components/header/header.component';
import { FooterComponent } from './template/components/footer/footer.component';
import { ServicesComponent } from './template/components/services/services.component';
import { HeaderPageComponent } from './template/components/header-page/header-page.component';
import { QuienesSomosComponent } from './template/components/quienes-somos/quienes-somos.component';
import { HeaderRegistrarseComponent } from './template/components/header-registrarse/header-registrarse.component';
import { SocialNetworksComponent } from './template/components/social-networks/social-networks.component';


//Pages
import { HomeComponent } from './template/pages/home/home.component';
import { ErrorComponent } from './template/pages/error/error.component';
import { TestimonialsComponent } from './template/components/testimonials/testimonials.component';
import { ContactoPageComponent } from './template/pages/contacto-page/contacto-page.component';
import { ServiciosPageComponent } from './template/pages/servicios-page/servicios-page.component';
import { QuienesSomosPageComponent } from './template/pages/quienes-somos-page/quienes-somos-page.component';
import { RegistrarPageComponent } from './template/pages/registrar-page/registrar-page.component';

//Modules
//Administración
//Componentes:
import { HeaderMgmtComponent }from './management/components/header-mgmt/header-mgmt.component';
import { MenuMgmtComponent }from './management/components/menu-mgmt/menu-mgmt.component';
import { ButtonsMgmtComponent } from './management/components/buttons-mgmt/buttons-mgmt.component';


import { CrearUsuarioComponent } from './modulos/administracion/usuarios/crear-usuario/crear-usuario.component';
import { ListarUsuarioComponent } from './modulos/administracion/usuarios/listar-usuario/listar-usuario.component';
import { RegistrarUsuarioComponent } from './modulos/administracion/usuarios/registrar-usuario/registrar-usuario.component';
import { CrearProductoComponent } from './modulos/administracion/productos/crear-producto/crear-producto.component';
import { ListarProductoComponent } from './modulos/administracion/productos/listar-producto/listar-producto.component';
import { CrearSucursalComponent } from './modulos/administracion/sucursales/crear-sucursal/crear-sucursal.component';
import { ListarSucursalComponent } from './modulos/administracion/sucursales/listar-sucursal/listar-sucursal.component';
import { CrearPlanComponent } from './modulos/administracion/planes/crear-plan/crear-plan.component';
import { ListarPlanComponent } from './modulos/administracion/planes/listar-plan/listar-plan.component';
import { CrearMascotaComponent } from './modulos/administracion/mascotas/crear-mascota/crear-mascota.component';
import { ListarMascotaComponent } from './modulos/administracion/mascotas/listar-mascota/listar-mascota.component';
import { CrearContactoComponent } from './modulos/comercial/contactos/crear-contacto/crear-contacto.component';
import { ListarContactoComponent } from './modulos/comercial/contactos/listar-contacto/listar-contacto.component';


//Pages
import { MascotasPageComponent } from './management/pages/administracion/mascotas-page/mascotas-page.component';
import { PlanesPageComponent } from './management/pages/administracion/planes-page/planes-page.component';
import { ProductosPageComponent } from './management/pages/administracion/productos-page/productos-page.component';
import { SucursalesPageComponent } from './management/pages/administracion/sucursales-page/sucursales-page.component';
import { UsuariosPageComponent } from './management/pages/administracion/usuarios-page/usuarios-page.component';
import { ProductosServiciosPageComponent } from './management/pages/comercial/productos-servicios-page/productos-servicios-page.component';
import { ContactosPageComponent } from './management/pages/comercial/contactos-page/contactos-page.component';
import { CambioClavePageComponent } from './management/pages/seguridad/cambio-clave-page/cambio-clave-page.component'

//Comercial
import { ContactoMgmtComponent } from './management/components/contacto-mgmt/contacto-mgmt.component';

//Seguridad
import { CambioClaveComponent } from './modulos/seguridad/cambio-clave/cambio-clave.component';
import { ServiciosPreciosComponent } from './template/components/servicios-precios/servicios-precios.component';

@NgModule({
  declarations: [
    //Componentes de Gestión
    //Comercial
    ContactosPageComponent,
    CrearContactoComponent,
    ProductosServiciosPageComponent,

    //Administración
    //Componentes:
    HeaderMgmtComponent,
    MenuMgmtComponent,
    ButtonsMgmtComponent,
    CrearUsuarioComponent,
    RegistrarUsuarioComponent,
    CrearMascotaComponent,
    ListarUsuarioComponent,
    ListarMascotaComponent,
    ListarPlanComponent,
    ListarSucursalComponent,
    CrearPlanComponent,
    CrearSucursalComponent,
    ListarContactoComponent,
    CrearProductoComponent,
    ListarProductoComponent,
    ListarContactoComponent,
    ContactoMgmtComponent,
    CambioClaveComponent,
    //Paginas:
    MascotasPageComponent,
    PlanesPageComponent,
    ProductosPageComponent,
    SucursalesPageComponent,
    UsuariosPageComponent,
    ContactoPageComponent,
    CambioClavePageComponent,

    //Seguridad

    //Componentes de pagina principal
    AppComponent,
    SliderComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    HeaderPageComponent,
    QuienesSomosComponent,
    HeaderRegistrarseComponent,
    ServiciosPreciosComponent,
    SocialNetworksComponent,

    //Paginas principales
    HomeComponent,
    ErrorComponent,
    TestimonialsComponent,
    ContactoPageComponent,
    ServiciosPageComponent,
    QuienesSomosPageComponent,
    RegistrarPageComponent

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
