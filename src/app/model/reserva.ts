import { Time } from '@angular/common';
import { Livro } from './livro';

export class Reserva {
  nomeSolicitante: string;
  data: Date;
  livro: Livro;

  constructor(nomeSolicitante: string, data: Date, livro: Livro) {
    this.nomeSolicitante = nomeSolicitante;
    this.data = data;
    this.livro = livro;
  }
}
