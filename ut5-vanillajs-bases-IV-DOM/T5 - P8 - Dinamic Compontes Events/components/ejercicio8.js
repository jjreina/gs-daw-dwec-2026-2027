// Ejercicio 8. Crear casillas de verificación
/*
Salida HTML esperada:
<div>
  <div>
    <input type="checkbox" id="html" name="tecnologias" value="html" checked />
    <label for="html">HTML</label>
  </div>
  <div>
    <input type="checkbox" id="css" name="tecnologias" value="css" checked />
    <label for="css">CSS</label>
  </div>
  <div>
    <input type="checkbox" id="javascript" name="tecnologias" value="javascript" />
    <label for="javascript">JavaScript</label>
  </div>
  <div>
    <input type="checkbox" id="typescript" name="tecnologias" value="typescript" />
    <label for="typescript">TypeScript</label>
  </div>
</div>

💡 EVENTO RECOMENDADO: Agregar 'change' a las casillas para actualizar un párrafo
   con «Tecnologías seleccionadas: » y el número de casillas marcadas. Mostrar el valor inicial.
*/
export const ejercicio8 = () => {
  const tecnologias = [
    { valor: "html", texto: "HTML" },
    { valor: "css", texto: "CSS" },
    { valor: "javascript", texto: "JavaScript" },
    { valor: "typescript", texto: "TypeScript" },
  ];

  // TODO: implementar
};
