import { Component, OnInit } from '@angular/core';
import { JUEGOS } from '../constantes/const';

@Component({
  selector: 'app-menu-juegos',
  templateUrl: './menu-juegos.component.html',
  styleUrls: ['./menu-juegos.component.css']
})
export class MenuJuegosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  juegos = JUEGOS;

}
