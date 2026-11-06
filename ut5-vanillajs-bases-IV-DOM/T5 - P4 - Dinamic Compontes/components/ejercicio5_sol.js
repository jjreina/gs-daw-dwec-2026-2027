// Ejercicio 5. Crear un área de texto
/*
Salida HTML:
<div>
  <label for="observaciones">Observaciones</label>
  <textarea id="observaciones" name="observaciones" rows="5" cols="40" placeholder="Introduce tus observaciones...">Escribe tus observaciones aquí...</textarea>
</div>
*/
export const ejercicio5 = () => {
  const label = document.createElement("label");
  label.textContent = "Observaciones";
  label.htmlFor = "observaciones";

  const textarea = document.createElement("textarea");
  textarea.id = "observaciones";
  textarea.name = "observaciones";
  textarea.rows = 5;
  textarea.cols = 40;
  textarea.placeholder = "Introduce tus observaciones...";
  textarea.value = "Escribe tus observaciones aquí...";

  const container = document.createElement("div");
  container.append(label, textarea);
  return container;
};
