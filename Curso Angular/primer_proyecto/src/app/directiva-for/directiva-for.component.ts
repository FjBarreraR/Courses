import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva-for',
  imports: [],
  templateUrl: './directiva-for.component.html',
  styleUrl: './directiva-for.component.css'
})
export class DirectivaForComponent {
  tareas: string[] = [
    'Aprender Angular',
    'Desarrollar una App',
    'Aprende TypeScript'
  ];

  agregarTarea(nuevaTarea:string):void{
    this.tareas.push(nuevaTarea);
  }
}
