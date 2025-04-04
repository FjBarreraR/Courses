import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productos: any[]=[
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

  detalleProductoEmitter = new EventEmitter<any>();

  

  constructor() { }

  obtenerListadoProductos(): any {
    return this.productos;
  }
}
