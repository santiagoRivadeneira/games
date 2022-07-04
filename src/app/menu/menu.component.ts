import { Component, OnInit } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import Usuario from '../interfaces/user.interfaces';
import { UserService } from '../services/user.services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  usuarios: Usuario[];

  constructor( private usuariosSerive: UserService,) { 
    this.usuarios = [{
      id: null,
      correo: null,
      contraseña: null,
      isLogg : false,
      planId: 0
    }]
  }

  ngOnInit(): void {
    this.usuariosSerive.getUsuarios().subscribe(usuario => {
      this.usuarios = usuario;
    })
    console.log(this.usuarios)
  }




}
