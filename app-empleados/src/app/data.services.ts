import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataServices{
    constructor (private httpClient: HttpClient){        
    }

    cargarEmpleados(){
        return this.httpClient.get('https://mis-clientes---angular-default-rtdb.firebaseio.com/datos.json');
    }

    guardarEmpleados(empleados:Empleado[]){
        this.httpClient.put('https://mis-clientes---angular-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(
            response=>console.log("Se han guardado los registros :" + response),
            error=>console.log("Error :"+ error)
            
        );
    }

    actualizarEmpleado(indice:number, empleado:Empleado){
        let url='https://mis-clientes---angular-default-rtdb.firebaseio.com/datos/'+indice+'.json';
        this.httpClient.put(url,empleado).subscribe(
            response=>console.log("Se ha actualizado el registro :" + response),
            error=>console.log("Error :"+ error)
            
        );
    }

    eliminarEmpleado(indice:number){
        let url='https://mis-clientes---angular-default-rtdb.firebaseio.com/datos/'+indice+'.json';
        this.httpClient.delete(url).subscribe(
            response=>console.log("Se ha eliminado el registro :" + response),
            error=>console.log("Error :"+ error)
            
        );
    }
}