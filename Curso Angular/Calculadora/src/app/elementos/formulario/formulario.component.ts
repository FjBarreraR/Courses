import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  operandoA: any = '';
  operandoB: any = '';

  @Output() resultadoFinal = new EventEmitter<any>();

  sumar(){
    this.resultadoFinal.emit(Number(this.operandoA) + Number(this.operandoB));
  };
}
