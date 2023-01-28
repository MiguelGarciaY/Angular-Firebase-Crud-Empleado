import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  titulo = 'Listado de empleados';
  empleados:Empleado[]=[];
  constructor(private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService ){    
  }

  ngOnInit(): void {
    //this.empleados=this.empleadosService.empleados;
    this.empleadosService.obtenerEmpleados().subscribe(misEmpleados=>{
      console.log(misEmpleados);
        this.empleados = Object.values(misEmpleados);
        this.empleadosService.setEmpleados(this.empleados);
    })
  }

  registrar(nombre: string, apellido: string, cargo: string, salario: string){
    this.miServicio.muestraMensaje("Nombre: " + nombre);
    let miEmpleados=new Empleado(nombre,apellido,cargo,parseInt(salario));
    this.empleadosService.agregarEmpleadosServicio(miEmpleados);
  }
}
