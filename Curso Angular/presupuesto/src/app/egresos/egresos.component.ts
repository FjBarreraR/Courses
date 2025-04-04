import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-egresos',
  imports: [CommonModule],
  templateUrl: './egresos.component.html',
  styleUrl: './egresos.component.css'
})
export class EgresosComponent {
  egresos: any = [
    {descripcion: 'Renta Depto', valor: 900},
    {descripcion: 'Ropa', valor: 200}
  ]

  total: number = 0.00;

  totalIngresos(ingresos: any){
    for (let index = 0; index <= this.egresos.length; index++) {
      this.total -= this.egresos[index].valor;
    }
  }
}
