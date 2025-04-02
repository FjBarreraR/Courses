import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  private titulo = 'titulo componente hijo';

  // Getter de typeScript
  get mostrarTitulo(){
    return this.titulo;
  }

  getTitulo(){
    return this.titulo;
  }
}
