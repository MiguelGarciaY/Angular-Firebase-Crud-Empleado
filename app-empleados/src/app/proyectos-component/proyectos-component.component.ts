import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {
  empleados:Empleado[]=[];
  constructor(private router:Router,private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) { }

  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
  }

  volverHome(){
    this.router.navigate([""]);
  }

  registrar(nombre: string, apellido: string, cargo: string, salario: string){
    this.miServicio.muestraMensaje("Nombre: " + nombre);
    let miEmpleados=new Empleado(nombre,apellido,cargo,parseInt(salario));
    this.empleadosService.agregarEmpleadosServicio(miEmpleados);
    this.router.navigate([""]);
  }

}
