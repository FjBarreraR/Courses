import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoService } from './ingreso.service';

@Component({
  selector: 'app-ingresos',
  imports: [CommonModule],
  templateUrl: './ingresos.component.html',
  styleUrl: './ingresos.component.css'
})
export class IngresosComponent {
  ingresos: Ingreso[]=[];

  constructor(private ingresoServicio: IngresoService){
    this.ingresos = this.ingresoServicio.ingresos;
  }

  eliminarRegistro(ingreso: Ingreso){
    this.ingresoServicio.eliminar(ingreso);
  }
}
