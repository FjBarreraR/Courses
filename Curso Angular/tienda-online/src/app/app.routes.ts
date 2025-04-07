import { Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { FormularioProductoComponent } from './listado-productos/formulario-producto/formulario-producto.component';

export const routes: Routes = [
    {path:'', component: ListadoProductosComponent},
    {path:'listado', component: ListadoProductosComponent},
    {path:'agregar', component: FormularioProductoComponent},
    {path:'editar:id', component: FormularioProductoComponent}
];
