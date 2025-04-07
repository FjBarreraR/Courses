import { Component, Input } from '@angular/core';
import { IngresosComponent } from "../ingresos/ingresos.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabecera',
  imports: [IngresosComponent, CommonModule],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {
  @Input() presupuestoTotal !: number;
  @Input() ingresoTotal !: number;
  @Input() egresoTotal !: number;
  @Input() porcentajeTotal !: number;
}
