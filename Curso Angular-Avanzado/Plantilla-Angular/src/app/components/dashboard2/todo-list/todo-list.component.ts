import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports:[MaterialModule, TablerIconsModule, CommonModule],
  templateUrl: './todo-list.component.html',
})
export class AppTodoListComponent {
  constructor() {}

  
}
