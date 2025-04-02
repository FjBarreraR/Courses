import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElementosComponent } from "./elementos/elementos.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ElementosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aplicación Calculadora';
}
