import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { DetalleNoticiaComponent } from './componentes/detalle-noticia/detalle-noticia.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { ServicioAlClienteComponent } from './componentes/servicio-al-cliente/servicio-al-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DetalleNoticiaComponent,
    NavbarComponent,
    NoticiasComponent,
    ServicioAlClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
