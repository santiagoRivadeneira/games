import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import Usuario from '../interfaces/user.interfaces';
import { UserService } from '../services/user.services';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  usuarios: Usuario[];
  correoAuth = ""
  contrasena = ""

  constructor(
    private usuariosSerive: UserService,
  
  )     { 

    this.usuarios = [{
      id: null,
      correo: null,
      contraseña: null,
      isLogg: false,
      planId: 0
    }]

  }


  ngOnInit(): void {

    
    this.usuariosSerive.getUsuarios().subscribe(usuario => {
      this.usuarios = usuario;

      console.log(this.usuarios)
    })

  }


  validacion () {
    
    this.usuarios.map((usuario) => {
        
      const {correo, contraseña} = usuario;
    
      if(correo == this.correoAuth, contraseña == this.contrasena ){
          console.log("inicio sesion correctamente")


          
      }else{
        console.log("correo o contraseña erroneos")
      } 
    })
  }



  plan()  {
         
    this.usuarios.map((usuario) => {
        
      const {correo, contraseña, planId} = usuario;
      
      if(planId >= 1){
        return true
      }else{
        return false
      }

    })
   } 



}


