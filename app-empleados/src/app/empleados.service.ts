import { Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataServices: DataServices) { }

  /*empleados: Empleado[]=[
    new Empleado("Juan","Diaz","Presidente",7500),
    new Empleado("Anna","Martin","Secretaria",2500),
    new Empleado("Maria","Fernandez","Directora",6000),
    new Empleado("Laura","Lopez","Jefa",6500),
  ];*/

  empleados: Empleado[] = [];

  setEmpleados(misEmpleados: Empleado[]){
    this.empleados=misEmpleados;
  }

  obtenerEmpleados() {
    return this.dataServices.cargarEmpleados(); //Devuelve un observable
  }

  agregarEmpleadosServicio(empleado: Empleado) {
    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: \n");
    this.empleados.push(empleado);
    this.dataServices.guardarEmpleados(this.empleados);
  }

  encontrarEmpleado(indice: number) {
    let empleado = this.empleados[indice]
    return empleado;
  }

  actualizarEmpleado(indice: number, empleado: Empleado) {
    this.empleados[indice] = empleado;
    this.dataServices.actualizarEmpleado(indice, this.empleados[indice])
  }

  eliminarEmpleado(indice: number) {
    this.empleados.splice(indice, 1);
    this.dataServices.eliminarEmpleado(indice);
    if(this.empleados !=  null)
      this.dataServices.guardarEmpleados(this.empleados);
  }
}
