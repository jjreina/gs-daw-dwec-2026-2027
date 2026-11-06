// Ejercicio 6. Crear una lista desplegable
/*
Salida HTML esperada:
<div>
  <label for="lenguaje">Lenguaje de programación</label>
  <select id="lenguaje" name="lenguaje">
    <option value="" disabled selected>Selecciona un lenguaje</option>
    <option value="js">JavaScript</option>
    <option value="python">Python</option>
    <option value="java">Java</option>
    <option value="php">PHP</option>
  </select>
</div>
*/
export const ejercicio6 = () => {
  const label = document.createElement("label");
  label.textContent = "Lenguaje de programación";
  label.htmlFor = "lenguaje";

  const select = document.createElement("select");
  select.id = "lenguaje";
  select.name = "lenguaje";

  const lenguajes = [
    { valor: "", texto: "Selecciona un lenguaje" },
    { valor: "js", texto: "JavaScript" },
    { valor: "python", texto: "Python" },
    { valor: "java", texto: "Java" },
    { valor: "php", texto: "PHP" },
  ];

  lenguajes.forEach((lenguaje, indice) => {
    const option = document.createElement("option");

    option.value = lenguaje.valor;
    option.textContent = lenguaje.texto;

    if (indice === 0) {
      option.disabled = true;
      option.selected = true;
    }

    select.append(option);
  });

  const container = document.createElement("div");
  container.append(label, select);
  return container;
};
