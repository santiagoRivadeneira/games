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
    { id: 2, 
      title: "Piedra Papel o Tijera", 
      description: "puedes elegir 3 opciones, una siempre mata a la otra, al mejor de 3 ganaras la partida ", 
      rute: "/pptijeras", 
      image: "assets/portadappt.jpg"
    },

  ];