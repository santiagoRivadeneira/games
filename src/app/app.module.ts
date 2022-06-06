import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
//base de datos
import { firebaseConfig } from './Db';
//angular
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';





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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
