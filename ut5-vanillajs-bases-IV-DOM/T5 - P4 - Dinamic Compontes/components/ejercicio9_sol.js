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
*/
export const ejercicio9 = () => {
  const tecnologias = ["HTML", "CSS", "JavaScript", "TypeScript", "Angular"];

  const titulo = document.createElement("h2");
  titulo.textContent = "Tecnologías web";

  const ul = document.createElement("ul");

  tecnologias.forEach((tecnologia) => {
    const li = document.createElement("li");
    li.textContent = tecnologia;
    ul.append(li);
  });

  const container = document.createElement("div");
  container.append(titulo, ul);
  return container;
};
