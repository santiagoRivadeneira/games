import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, addDoc, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import Usuario from '../interfaces/user.interfaces';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: Firestore) { }

  //agregar una propiedad a la base de datoss de firestone
  addUser (usuario: Usuario) {
    //crear una coleccion en firestone
    const usuarioRef = collection(this.firestore, 'usuario' )
    //insertar
    return addDoc(usuarioRef, usuario)
  }

  getUsuarios(): Observable<Usuario[]> {

    const usuarioRef = collection(this.firestore, 'usuario' )

    //array de propiedades
    return collectionData(usuarioRef, { idField: 'id' }) as Observable<Usuario[]>
  }


  



}