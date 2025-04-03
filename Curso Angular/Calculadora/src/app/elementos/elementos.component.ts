import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from "./formulario/formulario.component";
import { ResultadoComponent } from "./resultado/resultado.component";

@Component({
  selector: 'app-elementos',
  imports: [FormsModule, FormularioComponent, ResultadoComponent],
  templateUrl: './elementos.component.html',
  styleUrl: './elementos.component.css'
})
export class ElementosComponent {
  resultado: any = '';

  establecerValor(resultado: any){
    this.resultado = resultado;
  };
}
