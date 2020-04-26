import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-respiratorio',
  templateUrl: './respiratorio.component.html',
  styleUrls: ['./respiratorio.component.css']
})
export class RespiratorioComponent implements OnInit {


  columnaI = [
    "Normal",
    "Apnea",
    "Irregular",
    "Paradojal",
    "Desorientado",
  ]

  columnaII = [
    "Músculos accesorios",
    "Asistido",
    "Hemoptisis",
    "Broncoaspiración",
    "Excitado",
  ]

  columnaIII = [
    "Cuerpo extraño",
    "Estridor",
    "Sustancias",
    "Roncus",
    "Lucido",    
  ]

  columnaIV = [
    "Matidez Percutoria Columna",
    "Matidez Percutoria Campos Pulmonares",
    "Murmullo vesicular ausente",
    "Soplo tubario",
    "Frote pleural"
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
