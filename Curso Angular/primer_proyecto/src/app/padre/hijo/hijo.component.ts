import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  // operador !: non-null assertion
  // confie en que esta propiedad va a ser inicializada
  // @Input() mensaje!: string;

  // @Output() notificarPadre = new EventEmitter<string>();
  // enviarMensaje() {
  //   this.notificarPadre.emit('Mensaje desde el componente hijo al padre');
  // }
  
  mensaje2: string = 'Mensaje desde el componente hijo';

  cambiarMensaje(nuevoMensaje: string){
    this.mensaje2 = nuevoMensaje;
  }
}
