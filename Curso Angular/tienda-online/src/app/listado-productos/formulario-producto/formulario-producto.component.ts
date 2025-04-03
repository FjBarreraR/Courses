import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-producto',
  imports: [FormsModule],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css'
})
export class FormularioProductoComponent {
  @Output() nuevoProd = new EventEmitter<any>();

  newProducto: any = {};

  agregarProducto():void{
    this.nuevoProd.emit(this.newProducto);
    this.newProducto = {};
  }
}
