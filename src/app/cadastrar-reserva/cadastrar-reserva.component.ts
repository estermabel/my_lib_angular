import { Time } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Livro } from '../model/livro';
import { Reserva } from '../model/reserva';
import { LivroService } from '../service/livro.service';
import { ReservaService } from '../service/reserva.service';

@Component({
  selector: 'app-cadastrar-reserva',
  templateUrl: './cadastrar-reserva.component.html',
  styleUrls: ['./cadastrar-reserva.component.css'],
})
export class CadastrarReservaComponent implements OnInit {
  @Output() agendar = new EventEmitter<any>();
  constructor(
    private livroService: LivroService,
    private reservaService: ReservaService
  ) {}

  lamis: Livro[] = [];
  formLami: any;
  submitted: boolean = false;
  horarioInvalido: boolean = false;
  dataInvalida: boolean = false;

  ngOnInit(): void {
    this.lamis = this.livroService.listarTodos();
    this.formLami = new FormGroup({
      nomeSolicitante: new FormControl('', Validators.required),
      livro: new FormControl('', Validators.required),
      dataReserva: new FormControl('', Validators.required),
    });
  }

  agendarReserva() {
    this.submitted = true;
    const formulario = this.formLami.value;
    const livro = this.livroService.buscarPorId(formulario.livro);
    const reserva = {
      nomeSolicitante: formulario.nomeSolicitante,
      data: formulario.dataReserva,
      livro: livro,
    };

    if (this.formLami.valid && this.validarData(reserva)) {
      console.log(reserva);
      this.agendar.emit(reserva);
      this.limparCampos();
    }
  }

  limparCampos() {
    this.submitted = false;
    this.formLami.controls['nomeSolicitante'].setValue('');
    this.formLami.controls['livro'].setValue('');
    this.formLami.controls['dataReserva'].setValue('');
  }

  validarData(reserva: Reserva) {
    const reservas = this.reservaService.listarTodos();
    this.dataInvalida = false;
    reservas.forEach((r) => {
      if (r.livro.id == reserva.livro.id && r.data == reserva.data) {
        this.dataInvalida = true;
      }
    });

    return !this.dataInvalida;
  }
}
