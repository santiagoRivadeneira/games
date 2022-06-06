import { Juego } from "./juegos";


export const JUEGOS: Juego[] = [
    { 
      id: 1,  
      title: "Adivina el numero", 
      description: "El juego trata de adivinar un numero aleatoreo entre el 1 y el 20", 
      rute: "/adivina",
      image: "assets/adivinaPortada.png"
    },
    { id: 2, 
      title: "Ahorcado", 
      description: "tienes 3 intentos para adivinar el nombre", 
      rute: "/ahorcado", 
      image: "assets/ahorcadoPortada.png"
    },

  ];