import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IngresoService } from '../ingresos/ingreso.service';
import { EgresoService } from '../egresos/egreso.service';
import { Ingreso } from '../ingresos/ingreso.model';
import { Egreso } from '../egresos/egreso.model';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  tipo:string="ingresoOperacion";

  descripcionInput: string | null = null;
  valorInput: number | null = null;

  constructor(private ingresoServicio: IngresoService, private egresoServicio: EgresoService){}

  tipoOperacion(evento: Event) {
    const target = evento.target as HTMLSelectElement;
    this.tipo = target.value;
  }

  agregarValor() {
    if (this.descripcionInput != null && this.valorInput != null){
      if (this.tipo == 'ingresoOperacion'){
        this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
      }
      else {
        this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
      }
    }
    else {
      console.log('Introduce valores en descripción y valor válidos');
    }
    this.descripcionInput = null;
    this.valorInput = null;
  }
}
