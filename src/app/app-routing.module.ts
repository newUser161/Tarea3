import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './componentes/inicio/inicio.component';
import {DetalleNoticiaComponent} from './componentes/detalle-noticia/detalle-noticia.component';
import {ServicioAlClienteComponent} from './componentes/servicio-al-cliente/servicio-al-cliente.component';
import {NoticiasComponent} from './componentes/noticias/noticias.component';
const routes: Routes = [
  {path:"", component:InicioComponent},
  {path:"detalleNoticia/:id", component:DetalleNoticiaComponent},
  {path:"detalleNoticia", component:DetalleNoticiaComponent},
  {path:"contacto", component:ServicioAlClienteComponent},
  {path:"seccionNoticias", component:NoticiasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
