import { Component, OnInit } from '@angular/core';
import { Biblioteca } from '../shared/models/biblioteca';
import { MockLibros, MockCategorias } from '../shared/mock-libros';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  libros : Array<Biblioteca>;
  libroSeleccionado : Biblioteca;
  categorias : Array<string>;
  maximo : number;

  constructor() { }

  ngOnInit() {
    this.libros = MockLibros;
    this.categorias = MockCategorias;
  }

  onSelect(libro){
    this.libroSeleccionado = libro;
    this.maximo = this.libroSeleccionado.copias
  }

  prestarLibro(libro){
    libro.copias -= 1;
  }

  devolverLibro(libro){
    libro.copias += 1;
  }

  onSubmit(){
    this.libroSeleccionado = null;
  }
}
