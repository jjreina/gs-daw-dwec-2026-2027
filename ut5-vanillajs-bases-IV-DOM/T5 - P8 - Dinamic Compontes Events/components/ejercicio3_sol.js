// Ejercicio 3. Crear botones
/*
Salida HTML:
<div>
  <button id="guardar" type="button">Guardar</button>
  <button id="cancelar" type="button">Cancelar</button>
  <button id="eliminar" type="button">Eliminar</button>
</div>
*/
export const ejercicio3 = () => {
  const contenedor = document.createElement("div");

  const botones = [
    { id: "guardar", texto: "Guardar" },
    { id: "cancelar", texto: "Cancelar" },
    { id: "eliminar", texto: "Eliminar" },
  ];

  botones.forEach((datos) => {
    const boton = document.createElement("button");
    boton.classList.add("ej3-boton");

    boton.id = datos.id;
    boton.type = "button";
    boton.textContent = datos.texto;
    if (datos.id === "guardar") {
      boton.classList.add("ej3-guardar");
      boton.addEventListener("click", () => {
        const inputName = document.querySelector("#nombre");
        const inputEmail = document.querySelector("#email");
        const inputAge = document.querySelector("#edad");
        const textAreaObservations = document.querySelector("#observaciones");
        textAreaObservations.value = `${inputName.value} ${inputEmail.value} ${inputAge.value}`;
      });
    }
    if (datos.id === "cancelar") {
      boton.classList.add("ej3-cancelar");
    }
    if (datos.id === "eliminar") {
      boton.classList.add("ej3-eliminar");
    }

    contenedor.append(boton);
  });

  contenedor.classList.add("ej3-contenedor");
  return contenedor;
};
