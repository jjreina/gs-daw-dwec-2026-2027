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

    boton.id = datos.id;
    boton.type = "button";
    boton.textContent = datos.texto;

    contenedor.append(boton);
  });

  return contenedor;
};
