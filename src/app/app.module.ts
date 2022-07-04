import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
//rutas
import {AppComponent } from './app.component';
import { AdivinaComponent } from './adivina/adivina.component';
import { MenuComponent } from './menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { TatetiComponent } from './tateti/tateti.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { MenuJuegosComponent } from './menu-juegos/menu-juegos.component';

//angular
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { Router, RouterModule } from '@angular/router';
import { PPTijerasComponent } from './pptijeras/pptijeras.component';




@NgModule({
  declarations: [
    AppComponent,
    AdivinaComponent,
    MenuComponent,
    AhorcadoComponent,
    TatetiComponent,
    LoginComponent,
    RegistrarComponent,
    MenuJuegosComponent,
    SobreMiComponent,
    PPTijerasComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),


  ],
  providers: [   
    AngularFireDatabase,],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(
    private router: Router)     { 
    }



    goTo(route:string){
        this.router.navigate([route])
    }



}
