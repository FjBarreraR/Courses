import { Routes } from '@angular/router';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { MostrarComponenteComponent } from './mostrar-componente/mostrar-componente.component';
import { Component } from '@angular/core';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './padre/hijo/hijo.component';

export const routes: Routes = [
    {path:'', component: ListadoUsuariosComponent},
    {path:'mostrar-componente', component: MostrarComponenteComponent},
    {path:'configuracion', children:[
        {path:'padre', component: PadreComponent},
        {path:'hijo', component: HijoComponent}
    ]}
];
