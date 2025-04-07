import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from "./cabecera/cabecera.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { IngresosComponent } from "./ingresos/ingresos.component";
import { EgresosComponent } from "./egresos/egresos.component";
import { Ingreso } from './ingresos/ingreso.model';
import { Egreso } from './egresos/egreso.model';
import { IngresoService } from './ingresos/ingreso.service';
import { EgresoService } from './egresos/egreso.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabeceraComponent, FormularioComponent, IngresosComponent, EgresosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ingresos: Ingreso[]=[];
  egresos: Egreso[]=[];

  constructor(
    private ingresoServicio: IngresoService,
    private egresoServicio: EgresoService
  ){
    this.ingresos = ingresoServicio.ingresos;
    this.egresos = egresoServicio.egresos;
  }

  getIngresoTotal(){
    let ingresoTotal: number = 0;
    this.ingresos.forEach(ingreso=>{ingresoTotal += ingreso.valor});
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal: number = 0;
    this.egresos.forEach(egreso => {egresoTotal += egreso.valor})
    return egresoTotal;
  }

  getPorcentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
