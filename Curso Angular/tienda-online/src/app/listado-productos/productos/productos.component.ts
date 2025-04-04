import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../../productos.service';

@Component({
  selector: 'app-productos',
  imports: [FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  @Input() productos !: any[];

  producto:any;

  constructor(private ps: ProductosService){
    this.ps.detalleProductoEmitter.subscribe( (producto: any) => {
      console.log(producto);
      alert(`Producto: ${producto.descripcion}, $${producto.precio}`)
    });
  }

  emitirDetalleProducto(producto: any) {
    this.ps.detalleProductoEmitter.emit(producto)
  }
}
