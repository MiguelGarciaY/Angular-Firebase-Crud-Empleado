import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualice-component',
  templateUrl: './actualice-component.component.html',
  styleUrls: ['./actualice-component.component.css']
})
export class ActualiceComponentComponent implements OnInit {
  empleados!: Empleado[];
  constructor(private router: Router, private route: ActivatedRoute, private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) { }

  ngOnInit(): void {
    
    //this.empleados=this.empleadosService.empleados;

    //this.empleados=this.empleadosService.empleados;
    this.empleadosService.obtenerEmpleados().subscribe(misEmpleados => {
      this.accion = this.route.snapshot.queryParams['accion'];
      this.empleados = Object.values(misEmpleados);
      this.indice = this.route.snapshot.params['id']; //Obtiene el indice del empleado que viene a travez de la Uri 
      let empleado: Empleado = this.empleadosService.encontrarEmpleado(this.indice);
      //let empleado: Empleado = this.empleados[this.indice];
      this.cuadroNombre = empleado.nombre;
      this.cuadroApellido = empleado.apellido;
      this.cuadroCargo = empleado.cargo;
      this.cuadroSalario = empleado.salario;
    })

  }

  cuadroNombre: string = ""
  cuadroApellido: string = ""
  cuadroCargo: string = ""
  cuadroSalario!: number;

  indice!: number;
  accion!: number;
  /*
    actualizaEmpleado(nombre: string, apellido: string, cargo: string, salario: string){
      //this.miServicio.muestraMensaje("Nombre: " + nombre);
      let miEmpleados=new Empleado(nombre,apellido,cargo,parseInt(salario));
      this.empleadosService.actualizarEmpleado(this.indice, miEmpleados);
      this.router.navigate([""]);
    }
  
    eliminarEmpleado(){    
      this.empleadosService.eliminarEmpleado(this.indice);
      this.router.navigate([""]);
    }
  */
  actualizaEmpleado(nombre: string, apellido: string, cargo: string, salario: string) {
    if (this.accion == 1) {
      let miEmpleados = new Empleado(nombre, apellido, cargo, parseInt(salario));
      this.empleadosService.actualizarEmpleado(this.indice, miEmpleados);
    } else {
      this.empleadosService.eliminarEmpleado(this.indice);
    }
    this.router.navigate([""]);
  }
}
