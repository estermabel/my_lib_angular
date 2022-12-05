import { Reserva } from './../model/reserva';
import { Livro } from './../model/livro';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  busca!: Livro;
  livros: Livro[] = [
    { id: 0, nome: 'Selecione um livro...' },
    { id: 1, nome: 'The Fundamentals of Java' },
    { id: 2, nome: 'O Malabarista' },
    { id: 3, nome: 'Como Resolver um Cubo Mágico' },
    { id: 4, nome: 'O Caçador de Pipas' },
    { id: 5, nome: 'Hábitos Atômicos' },
    { id: 6, nome: 'Código Limpo' },
  ];

  constructor() {}

  listarTodos() {
    return this.livros;
  }

  buscarPorId(id: number) {
    this.livros.forEach((element) => {
      if (element.id == id) {
        this.busca = element;
      }
    });
    return this.busca;
  }
}
