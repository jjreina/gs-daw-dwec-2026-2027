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
  const lenguajes = [
    { valor: "", texto: "Selecciona un lenguaje" },
    { valor: "js", texto: "JavaScript" },
    { valor: "python", texto: "Python" },
    { valor: "java", texto: "Java" },
    { valor: "php", texto: "PHP" },
  ];

  // TODO: implementar
};
