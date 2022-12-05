import { Component, VERSION } from '@angular/core';
import { Reserva } from './model/reserva';
import { ReservaService } from './service/reserva.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private reservaService: ReservaService) {}

  reservar($event: Reserva) {
    this.reservaService.salvarReserva($event);
  }
}
