import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipes',
  imports: [CommonModule],
  templateUrl: './ejemplo-pipes.component.html',
  styleUrl: './ejemplo-pipes.component.css'
})
export class EjemploPipesComponent {
  empleados = [
    {nombre:'Ricardo Suarez', sueldo: 12000, fechaNacimiento: new Date('2000-08-01')},
    {nombre: 'Laura Mejía', sueldo: 15000, fechaNacimiento: new Date('1988-01-05')},
    {nombre: 'Gilberto Anaya', sueldo: 8000, fechaNacimiento: new Date('1995-07-12')}
  ]
}
