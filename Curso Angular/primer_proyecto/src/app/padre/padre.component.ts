import { Component, ViewChild } from '@angular/core';
import { HijoComponent } from "./hijo/hijo.component";

@Component({
  selector: 'app-padre',
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  // mensajePadre: string = 'mensaje desde el componente padre';

  // mensaje: string = '';
  // recibirNotifiacion(mensajeHijo: string) {
  //   this.mensaje = mensajeHijo;
  // }
  
  @ViewChild(HijoComponent) componenteHijo !: HijoComponent;

  cambiarMensajeHijo() {
    this.componenteHijo.cambiarMensaje('Mensaje actualizado desde el componente Padre');
  }
}
