import { Component } from '@angular/core';
import { ProductosComponent } from "./productos/productos.component";
import { FormularioProductoComponent } from "./formulario-producto/formulario-producto.component";

@Component({
  selector: 'app-listado-productos',
  imports: [ProductosComponent, FormularioProductoComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {
  titulo = 'Listado de Productos';

  productos: any[]=[
    {
      descripcion: 'Pantalón',
      precio: 130
    },
    {
      descripcion: 'Camisa',
      precio: 80
    },
    {
      descripcion: 'Playera',
      precio: 50
    }
  ];

  nuevoProducto: any = {};

  agregarNuevoProd(nuevProd: any) {
    this.nuevoProducto = nuevProd;
  }
}
