import { Component } from '@angular/core';
import { ProductosComponent } from "./productos/productos.component";
import { FormularioProductoComponent } from "./formulario-producto/formulario-producto.component";
import { ProductosService } from '../productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-productos',
  imports: [ProductosComponent, FormularioProductoComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {
  titulo = 'Listado de Productos';

  productos: any[] = [];

  agregarNuevoProd(nuevProd: any) {
    this.productos.push(nuevProd);
  }

  constructor(private ps: ProductosService, private router: Router){
    
  }

  ngOnInit(){
    this.productos = this.ps.obtenerListadoProductos();
  }

  agregarProducto(){
    this.router.navigate(['agregar'])
  }
}
