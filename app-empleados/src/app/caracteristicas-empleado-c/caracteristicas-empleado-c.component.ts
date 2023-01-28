import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit {
  @Output() caracteristicassEmleado = new EventEmitter<string>();
  constructor(private miServicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

  agregaCaracteristica(value: string) {
    this.miServicio.muestraMensaje(value);
    this.caracteristicassEmleado.emit(value);
  }
}
