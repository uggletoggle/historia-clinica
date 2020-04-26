import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abdomen',
  templateUrl: './abdomen.component.html',
  styleUrls: ['./abdomen.component.css']
})
export class AbdomenComponent implements OnInit {

  columnaI = [
    "Hernia",
    "Eventración",
    "Evisceración",
    "Hematemesis",
  ]

  columnaII = [
    "Melena",
    "Enterorragia",
    "Ascitis",
    "Distendido",
  ]

  columnaIII = [
    "Doloroso",
    "Mag. Burney(+)",
    "Peritonismo",
    "Murphi",    
  ]

  columnaIV = [
    "Hepatomegalia",
    "Esplenomegalia",
    "Ruidos Hidroaereos",
    "Soplo"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
