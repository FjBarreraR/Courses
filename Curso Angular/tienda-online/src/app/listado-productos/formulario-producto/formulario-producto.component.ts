import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from '../../productos.service';

@Component({
  selector: 'app-formulario-producto',
  imports: [FormsModule],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css'
})
export class FormularioProductoComponent {
  @Output() nuevoProd = new EventEmitter<any>();

  constructor(private router: Router, private ps: ProductosService){}

  newProducto: any = {};

  productos: any[] = [];

  guardarProducto():void{
    this.nuevoProd.emit(this.newProducto);
    this.productos.push(this.newProducto);
    this.newProducto = {};
    this.router.navigate(['/']);
  }

  cancelar(){
    this.router.navigate(['/']);
  }
}
