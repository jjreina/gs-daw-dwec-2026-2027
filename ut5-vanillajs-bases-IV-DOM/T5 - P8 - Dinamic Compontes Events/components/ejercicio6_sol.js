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
  label.classList.add("ej6-etiqueta");

  const select = document.createElement("select");
  select.id = "lenguaje";
  select.name = "lenguaje";
  select.classList.add("ej6-selector");
  select.addEventListener("change", (event) => {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const radio = Array.from(radioButtons).find(
      (radio) => radio.value === event.target.value,
    );

    if (radio) {
      radio.checked = true;
    }
  });

  const lenguajes = [
    { valor: "", texto: "Selecciona un lenguaje" },
    { valor: "javascript", texto: "JavaScript" },
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
  container.classList.add("ej6-container");
  return container;
};
