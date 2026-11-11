// Ejercicio 7. Crear botones de opción
/*
Salida HTML esperada:
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

💡 EVENTO RECOMENDADO: Agregar 'change' a los radios para mostrar en un párrafo
   el horario del turno: mañana de 9:00 a 14:00, tarde de 15:00 a 20:00
   y noche de 20:00 a 22:00. Mostrar inicialmente el horario de mañana.
*/
export const ejercicio7 = () => {
  const turnos = [
    { valor: "manana", texto: "Mañana" },
    { valor: "tarde", texto: "Tarde" },
    { valor: "noche", texto: "Noche" },
  ];

  // TODO: implementar
};
