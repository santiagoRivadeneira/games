import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  
  ngOnInit(): void {
  }

  constructor(
    public afAuth: AngularFireAuth // Inject Firebase auth service
    
  ) {}

    public email: string  = "";
    public pass: string  = "";
  
    // Sign up with email/password
    SignUp(
    ) {
      return this.afAuth
        .createUserWithEmailAndPassword(this.email.trim(), this.pass)
        .then((result) => {
          window.alert('You have been successfully registered!');
          console.log(result.user);
        })
        .catch((error) => {
          window.alert(error.message);
        });
    }










  

}
