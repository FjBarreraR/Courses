import { Component } from '@angular/core';
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

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponenteComponent, ComponenteEnLineaComponent, InterpolacionComponent, PadreComponent, HijoComponent, MostrarComponenteComponent, ReplicadorComponent, SaludarComponent, ProyectoIfComponent, AgregarTareaComponent, DirectivaForComponent, ViewchildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Decorador @Output en Angular';
}
