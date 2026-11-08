import { ejercicio1 } from "./components/ejercicio1_sol.js";
import { ejercicio2 } from "./components/ejercicio2_sol.js";
import { ejercicio3 } from "./components/ejercicio3_sol.js";
import { ejercicio4 } from "./components/ejercicio4_sol.js";
import { ejercicio5 } from "./components/ejercicio5_sol.js";
import { ejercicio6 } from "./components/ejercicio6_sol.js";
import { ejercicio7 } from "./components/ejercicio7_sol.js";
import { ejercicio8 } from "./components/ejercicio8_sol.js";
import { ejercicio9 } from "./components/ejercicio9_sol.js";
import { ejercicio10 } from "./components/ejercicio10_sol.js";

const app = document.querySelector("#app");

const ejercicios = [
  ejercicio1,
  ejercicio2,
  ejercicio3,
  ejercicio4,
  ejercicio5,
  ejercicio6,
  ejercicio7,
  ejercicio8,
  ejercicio9,
  ejercicio10,
];

ejercicios.forEach((ejercicio, indice) => {
  if (indice > 0) {
    // comprobación para no añadir un hr al principio del html
    app.append(document.createElement("hr"));
  }
  app.append(ejercicio());
});
