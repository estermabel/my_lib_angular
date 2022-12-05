import { Reserva } from './../model/reserva';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  reservas: Reserva[] = [];

  constructor() {}

  listarTodos() {
    return this.reservas;
  }

  salvarReserva(reserva: Reserva) {
    this.reservas.push(reserva);
  }
}
