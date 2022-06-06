import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdivinaComponent } from './adivina/adivina.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { LoginComponent } from './login/login.component';
import { MenuJuegosComponent } from './menu-juegos/menu-juegos.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';

const routes: Routes = [
  {path: "adivina", component: AdivinaComponent},
  {path: "ahorcado", component: AhorcadoComponent},
  {path: "login", component: LoginComponent},
  {path: "registrar", component: RegistrarComponent},
  {path: "juegos", component: MenuJuegosComponent},
  {path: "sobremi", component: SobreMiComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
