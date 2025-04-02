import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-componente',
  imports: [],
  templateUrl: './mostrar-componente.component.html',
  styleUrl: './mostrar-componente.component.css'
})
export class MostrarComponenteComponent {
  mensaje: string = '';

  mostrarMensaje() {
    this.mensaje = 'Hola, has hecho click en el botón!'
  }

  resetearMensaje() {
    // Reiniciar el mensaje
    this.mensaje = '';
  }

}
