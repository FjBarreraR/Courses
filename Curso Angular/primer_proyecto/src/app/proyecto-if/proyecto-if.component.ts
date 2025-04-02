import { Component } from '@angular/core';

@Component({
  selector: 'app-proyecto-if',
  imports: [],
  templateUrl: './proyecto-if.component.html',
  styleUrl: './proyecto-if.component.css'
})
export class ProyectoIfComponent {
  isAutenticado: boolean = false;

  alternarAtutenticacion(): void{
    this.isAutenticado = !this.isAutenticado;
  }
}
