import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adivina',
  templateUrl: './adivina.component.html',
  styleUrls: ['./adivina.component.css']
})
export class AdivinaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  
  numero = 0
  min = 0;
  max = 10;
  win = false;
  intentos = 0;
  again = false;


  AdivinarNumero(numero: number) {
    this.numero = numero;
    let randomNumber: number = 1;
    numero.toString()

    if(randomNumber == this.numero){
      this.win = true

      Swal.fire({
        icon: 'success',
        title: `Cantidad de intentos ${this.intentos}`,
        text: '¡¡GANO!!',
      })


    }else{
      this.win = false
      this.intentos += 1
      

      Swal.fire({
        icon: 'error',
        title: `intento numero ${this.intentos}`,
        text: `Numero Equivocado: ${this.numero}`,
      })
    }


    if(this.intentos === 3){
      Swal.fire({
        icon: 'error',
        title: `intento numero ${this.intentos}`,
        text: 'sus intentos se acabaron, perdio',
      })
    }
  }



  volverJugar(){

   this.again = true;
   this.intentos = 0;
  
  }



}
