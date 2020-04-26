import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sistema-nervioso',
  templateUrl: './sistema-nervioso.component.html',
  styleUrls: ['./sistema-nervioso.component.css']
})
export class SistemaNerviosoComponent implements OnInit {


  columnaI = [
    "Discordia",
    "Miosia",
    "Midriasis",
    "Pupila fija",
    
  ]

  columnaII = [
    "Fotomotor(-)",
    "Corneal(-)",
    "Nistagmus",
    "Rigidez de nuca Badinsky (+)",
  ]

  columnaIII = [
    "Vigil",
    "Estuproso",
    "Coma",
    "Desviación conjugada de ojos",
    "Lucido",
    "Desorientado",
    "Excitado",
  ]

  columnaIV = [
    "Deprimido",
    "Afasia",
    "Apraxia",
    "Epistaxis",
    "Incontinencia de esfínteres"
  ]

  columnaV = [
    "Otorragia",
    "Otorraquia",
    "Ojos de muñeca",
    "Convulsiones focales",
    "Convulsiones generales",
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
