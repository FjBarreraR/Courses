import { Component } from '@angular/core';
import { ProductosComponent } from "./productos/productos.component";

@Component({
  selector: 'app-listado-productos',
  imports: [ProductosComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {
  titulo = 'Listado de Productos';

}
