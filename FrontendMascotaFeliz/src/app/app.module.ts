import { LoginComponent } from './modulos/seguridad/login/login.component';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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


//Pages
import { HomeComponent } from './template/pages/home/home.component';
import { ErrorComponent } from './template/pages/error/error.component';
import { TestimonialsComponent } from './template/components/testimonials/testimonials.component';
import { ContactoPageComponent } from './template/pages/contacto-page/contacto-page.component';
import { ServiciosPageComponent } from './template/pages/servicios-page/servicios-page.component';
import { QuienesSomosPageComponent } from './template/pages/quienes-somos-page/quienes-somos-page.component';


//Modules
//Administración
//Componentes:
import { CrearUsuarioComponent } from './modulos/administracion/usuarios/crear-usuario/crear-usuario.component';
import { HeaderMgmtComponent }from './management/components/header-mgmt/header-mgmt.component';
import { MenuMgmtComponent }from './management/components/menu-mgmt/menu-mgmt.component';
import { ButtonsMgmtComponent } from './management/components/buttons-mgmt/buttons-mgmt.component';
//Pages
import { MascotasPageComponent } from './management/pages/administracion/mascotas-page/mascotas-page.component';
import { PlanesPageComponent } from './management/pages/administracion/planes-page/planes-page.component';
import { ProductosPageComponent } from './management/pages/administracion/productos-page/productos-page.component';
import { SucursalesPageComponent } from './management/pages/administracion/sucursales-page/sucursales-page.component';
import { UsuariosPageComponent } from './management/pages/administracion/usuarios-page/usuarios-page.component';


//Comercial
import { ContactosPageComponent } from './management/pages/comercial/contactos-page/contactos-page.component';
import { ProductosServiciosPageComponent } from './management/pages/comercial/productos-servicios-page/productos-servicios-page.component';
import { CrearContactoComponent } from './modulos/comercial/contactos/crear-contacto/crear-contacto.component';
import { ListarUsuarioComponent } from './modulos/administracion/usuarios/listar-usuario/listar-usuario.component';

import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

//Seguridad
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
    ListarUsuarioComponent,

    //Paginas:
    MascotasPageComponent,
    PlanesPageComponent,
    ProductosPageComponent,
    SucursalesPageComponent,
    UsuariosPageComponent,
    ContactoPageComponent,


    //Seguridad


    //Componentes de pagina principal
    AppComponent,
    SliderComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    HeaderPageComponent,
    QuienesSomosComponent,

    //Paginas principales
    HomeComponent,
    ErrorComponent,
    TestimonialsComponent,
    ContactoPageComponent,
    ServiciosPageComponent,
    QuienesSomosPageComponent,


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
