import { Component, Input, OnInit } from '@angular/core';
import { Reserva } from '../model/reserva';
import { ReservaService } from '../service/reserva.service';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css'],
})
export class ListarReservaComponent implements OnInit {
  constructor(private reservaService: ReservaService) {}

  @Input() reservas: Reserva[] = [];

  ngOnInit(): void {
    this.reservas = this.reservaService.listarTodos();
  }
}
