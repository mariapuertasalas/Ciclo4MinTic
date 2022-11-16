

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
//Comercial
import { CrearContactoComponent } from './modulos/comercial/contactos/crear-contacto/crear-contacto.component';
//Seguridad

@NgModule({
  declarations: [
    //Componentes de Gestión
    CrearContactoComponent,


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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
