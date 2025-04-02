import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-elementos',
  imports: [FormsModule],
  templateUrl: './elementos.component.html',
  styleUrl: './elementos.component.css'
})
export class ElementosComponent {
  operandoA: any = '';
  operandoB: any = '';
  resultado: any = '';

  sumar(){
    this.resultado = Number(this.operandoA) + Number(this.operandoB);
  }
}
