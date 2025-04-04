import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from "./nuevo-componente/nuevo-componente.component";
import { ComponenteEnLineaComponent } from "./componente-en-linea/componente-en-linea.component";
import { InterpolacionComponent } from "./interpolacion/interpolacion.component";
import { PadreComponent } from "./padre/padre.component";
import { HijoComponent } from "./hijo/hijo.component";
import { MostrarComponenteComponent } from "./mostrar-componente/mostrar-componente.component";
import { ReplicadorComponent } from "./replicador/replicador.component";
import { SaludarComponent } from "./saludar/saludar.component";
import { ProyectoIfComponent } from "./proyecto-if/proyecto-if.component";
import { AgregarTareaComponent } from "./agregar-tarea/agregar-tarea.component";
import { DirectivaForComponent } from "./directiva-for/directiva-for.component";
import { ViewchildComponent } from "./viewchild/viewchild.component";
import { MensajeService } from './mensaje.service';
import { ListadoUsuariosComponent } from "./listado-usuarios/listado-usuarios.component";
import { EjemploPipesComponent } from "./ejemplo-pipes/ejemplo-pipes.component";
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es'

registerLocaleData(localeEs, 'es')

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponenteComponent, ComponenteEnLineaComponent, InterpolacionComponent, PadreComponent, HijoComponent, MostrarComponenteComponent, ReplicadorComponent, SaludarComponent, ProyectoIfComponent, AgregarTareaComponent, DirectivaForComponent, ViewchildComponent, ListadoUsuariosComponent, EjemploPipesComponent],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Servicios y Observables en Angular';

  mensaje: string;

  constructor(mensajeService: MensajeService){
    this.mensaje = mensajeService.obtenerMensaje();
  }
}
