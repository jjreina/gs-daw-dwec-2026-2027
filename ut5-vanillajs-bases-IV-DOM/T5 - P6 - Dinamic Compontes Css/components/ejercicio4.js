// Ejercicio 4. Crear campos de texto
/*
Salida HTML esperada:
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
  const campos = [
    { id: "nombre", texto: "Nombre", tipo: "text" },
    { id: "email", texto: "Correo electrónico", tipo: "email" },
    { id: "edad", texto: "Edad", tipo: "number" },
  ];
  // TODO: implementar
};
