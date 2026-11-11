// Ejercicio 4. Crear campos de texto
/*
Salida HTML:
<div>
  <div>
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre" />
  </div>
  <div>
    <label for="email">Correo electrónico</label>
    <input type="email" id="email" name="email" />
  </div>
  <div>
    <label for="edad">Edad</label>
    <input type="number" id="edad" name="edad" />
  </div>
</div>
*/
export const ejercicio4 = () => {
  const contenedor = document.createElement("div");

  const campos = [
    { id: "nombre", texto: "Nombre", tipo: "text" },
    { id: "email", texto: "Correo electrónico", tipo: "email" },
    { id: "edad", texto: "Edad", tipo: "number" },
  ];

  campos.forEach((campo) => {
    const div = document.createElement("div");
    div.classList.add("ej4-campo");

    const label = document.createElement("label");
    label.textContent = campo.texto;
    label.htmlFor = campo.id;
    label.classList.add("ej4-etiqueta");

    const input = document.createElement("input");
    input.type = campo.tipo;
    input.id = campo.id;
    input.name = campo.id;
    input.classList.add("ej4-entrada");

    div.append(label, input);
    contenedor.append(div);
  });

  contenedor.classList.add("ej4-contenedor");
  return contenedor;
};
