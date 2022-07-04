import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.services';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  
  ngOnInit(): void {
  }


  formulario: FormGroup;


  constructor(
    private UserService : UserService, private storage: AngularFireStorage
  ) {
    this.formulario = new FormGroup({
      correo: new FormControl(),
      contraseña: new FormControl(),
      isLogg: new FormControl(),
      planId: new FormControl(),
    })
   

  }





  async onSubmit(){
    console.log(this.formulario.value)

    const response = await this.UserService.addUser(this.formulario.value)
 
  }




  

}
