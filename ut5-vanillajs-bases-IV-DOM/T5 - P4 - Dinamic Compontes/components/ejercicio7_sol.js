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

  const legend = document.createElement("legend");
  legend.textContent = "Turno de clase";

  fieldset.append(legend);

  const turnos = [
    { valor: "manana", texto: "Mañana" },
    { valor: "tarde", texto: "Tarde" },
    { valor: "noche", texto: "Noche" },
  ];

  turnos.forEach((turno, indice) => {
    const div = document.createElement("div");

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.id = turno.valor;
    radio.name = "turno";
    radio.value = turno.valor;

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
