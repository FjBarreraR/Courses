import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  imports: [],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent {
  @ViewChild('referenciaInput') inputElemento!: ElementRef;

  cambiarTexto() {
    this.inputElemento.nativeElement.value = 'Texto cambiado';
  }
}
