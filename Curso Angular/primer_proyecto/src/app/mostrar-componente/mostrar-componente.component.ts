import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar-componente',
  imports: [],
  templateUrl: './mostrar-componente.component.html',
  styleUrl: './mostrar-componente.component.css'
})
export class MostrarComponenteComponent {
  mensaje: string = '';

  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    this.mensaje = this.route.snapshot.queryParams['mensaje'];
  }

  mostrarMensaje() {
    this.mensaje = 'Hola, has hecho click en el botón!'
  }

  resetearMensaje() {
    // Reiniciar el mensaje
    this.mensaje = '';
  }

}
