// Ejercicio 1. Crear encabezados y párrafos
/*
Salida HTML:
<div>
  <h1>Desarrollo Web en Entorno Cliente</h1>
  <h2>Unidad 5: DOM</h2>
  <p>Aprendemos a crear elementos HTML.</p>
  <p>Utilizaremos JavaScript para modificar el documento.</p>
</div>

💡 EVENTO RECOMENDADO: Agregar 'click' al h1 para cambiar el color de su texto a azul.
*/
export const ejercicio1 = () => {
  const h1 = document.createElement("h1");
  h1.textContent = "Desarrollo Web en Entorno Cliente";
  h1.classList.add("ej1-titulo");

  const h2 = document.createElement("h2");
  h2.textContent = "Unidad 5: DOM";
  h2.classList.add("ej1-subtitulo");

  const p1 = document.createElement("p");
  p1.textContent = "Aprendemos a crear elementos HTML.";
  p1.classList.add("ej1-parrafo1");

  const p2 = document.createElement("p");
  p2.textContent = "Utilizaremos JavaScript para modificar el documento.";
  p2.classList.add("ej1-parrafo2");

  const container = document.createElement("div");
  container.append(h1, h2, p1, p2);
  container.classList.add("ej1-contenedor");
  return container;
};
