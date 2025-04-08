import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Persona } from "./persona.model";

@Injectable()
export class DataService{
    constructor(private httpClient: HttpClient){}

    // cargar personas
    cargarPersonas(){
        return this.httpClient.get('https://listado-personas-a0d2e-default-rtdb.firebaseio.com/datos.json');
    }

    // guardar personas
    guardarPersonas(personas: Persona[]){
        this.httpClient.put('https://listado-personas-a0d2e-default-rtdb.firebaseio.com/datos.json', personas).subscribe(response =>console.log("resultado guardar Personas" + response), error => console.log("Error al guardar Personas:" + error));
    }

    // modificiar personas
    modificarPersona(index:number, persona: Persona){
        let url: string;
        url = 'https://listado-personas-a0d2e-default-rtdb.firebaseio.com/datos/' + index + '.json';
        this.httpClient.put(url, persona).subscribe(response => console.log("resultado modificar Persona:" + response), error => console.log("Error en modificar Persona:" + error))
    }

    // eliminar persona
    eliminarPersona(index:number){
        let url: string;
        url = 'https://listado-personas-a0d2e-default-rtdb.firebaseio.com/datos/' + index + '.json';
        this.httpClient.delete(url).subscribe(response => console.log("resultado de eliminar Persona:" + response), error => console.log("Error en eliminar Persona:" + error))
    }
}