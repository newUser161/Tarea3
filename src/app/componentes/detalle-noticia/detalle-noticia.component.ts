import { Component, OnInit } from '@angular/core';
import {listaNoticias} from '../../interfaces/noticia';
import {ActivatedRoute} from '@angular/router';
import {listaCategorias} from '../../interfaces/categoria'

@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrls: ['./detalle-noticia.component.scss']
})
export class DetalleNoticiaComponent implements OnInit {
  ListaNoticias = listaNoticias;
  ListaCategorias = listaCategorias;
  idNoticia:number = 0;
  noticia:any;
  categoria:any;

  constructor(private ruta:ActivatedRoute) { 
    this.ruta.params.subscribe(datos=>{
      this.idNoticia = datos["id"];      
    });
  }

  ngOnInit(): void {
    this.noticia = listaNoticias.find(objeto=>objeto.id==this.idNoticia)    
    this.categoria = listaCategorias.find(objeto=>objeto.id==this.noticia.idCategoria)
    console.log(this.categoria);
    
    
  }

}
