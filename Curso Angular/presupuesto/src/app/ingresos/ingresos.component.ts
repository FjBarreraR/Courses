import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ingresos',
  imports: [CommonModule],
  templateUrl: './ingresos.component.html',
  styleUrl: './ingresos.component.css'
})
export class IngresosComponent {
  ingresos: any = [
    {descripcion: 'Salario', valor: 4000},
    {descripcion: 'Venta coche', valor: 500}
  ]

  total: number = 0.00;

  totalIngresos(ingresos: any){
    for (let index = 0; index <= ingresos.length; index++) {
      this.total += this.ingresos[index].valor
    }
  }
}
