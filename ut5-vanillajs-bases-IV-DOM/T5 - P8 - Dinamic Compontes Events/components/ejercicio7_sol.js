// Ejercicio 7. Crear botones de opción
/*
Salida HTML:
<fieldset>
  <legend>Turno de clase</legend>
  <div>
    <input type="radio" id="manana" name="turno" value="manana" checked />
    <label for="manana">Mañana</label>
  </div>
  <div>
    <input type="radio" id="tarde" name="turno" value="tarde" />
    <label for="tarde">Tarde</label>
  </div>
  <div>
    <input type="radio" id="noche" name="turno" value="noche" />
    <label for="noche">Noche</label>
  </div>
</fieldset>
*/
export const ejercicio7 = () => {
  const fieldset = document.createElement("fieldset");
  fieldset.classList.add("ej7-fieldset");

  const legend = document.createElement("legend");
  legend.textContent = "Turno de clase";
  legend.classList.add("ej7-leyenda");

  fieldset.append(legend);

  const turnos = [
    { valor: "manana", texto: "Mañana" },
    { valor: "tarde", texto: "Tarde" },
    { valor: "noche", texto: "Noche" },
  ];

  turnos.forEach((turno, indice) => {
    const div = document.createElement("div");
    div.classList.add("ej7-opciones");

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.id = turno.valor;
    radio.name = "turno";
    radio.value = turno.valor;
    radio.classList.add("ej7-opcion");

    if (indice === 0) {
      radio.checked = true;
    }

    const label = document.createElement("label");
    label.htmlFor = turno.valor;
    label.textContent = turno.texto;

    div.append(radio, label);
    fieldset.append(div);
  });

  return fieldset;
};
