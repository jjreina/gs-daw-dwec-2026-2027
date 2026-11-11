// Ejercicio 9. Crear una lista no ordenada
/*
Salida HTML:
<div>
  <h2>Tecnologías web</h2>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>TypeScript</li>
    <li>Angular</li>
  </ul>
</div>

💡 EVENTO RECOMENDADO: Agregar 'click' a cada <li> para alternar su color de texto
   entre negro y azul, marcando así las tecnologías de interés.
*/
export const ejercicio9 = () => {
  const tecnologias = ["HTML", "CSS", "JavaScript", "TypeScript", "Angular"];

  const titulo = document.createElement("h2");
  titulo.textContent = "Tecnologías web";
  titulo.classList.add("ej9-titulo");

  const ul = document.createElement("ul");
  ul.classList.add("ej9-lista");

  tecnologias.forEach((tecnologia) => {
    const li = document.createElement("li");
    li.textContent = tecnologia;
    li.classList.add("ej9-tecnologia");
    ul.append(li);
  });

  const container = document.createElement("div");
  container.append(titulo, ul);
  return container;
};
