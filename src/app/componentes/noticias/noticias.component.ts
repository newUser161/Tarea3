import { Component, OnInit } from '@angular/core';
import {listaNoticias} from '../../interfaces/noticia';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  listaNoticias = listaNoticias;

  constructor() { }

  ngOnInit(): void {

  }

}
