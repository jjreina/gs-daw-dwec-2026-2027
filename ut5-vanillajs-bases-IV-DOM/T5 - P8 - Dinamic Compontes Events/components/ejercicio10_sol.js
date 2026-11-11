// Ejercicio 10. Crear una lista ordenada
/*
Salida HTML:
<div>
  <h2>Cursos disponibles</h2>
  <ol>
    <li><strong>JavaScript</strong><span> – 30 horas</span></li>
    <li><strong>TypeScript</strong><span> – 20 horas</span></li>
    <li><strong>Angular</strong><span> – 40 horas</span></li>
  </ol>
</div>

💡 EVENTO RECOMENDADO: Agregar 'click' a cada <li> para actualizar un párrafo
   con «Curso seleccionado: », el nombre del curso y su duración en horas.
*/
export const ejercicio10 = () => {
  const cursos = [
    { nombre: "JavaScript", duracion: 30 },
    { nombre: "TypeScript", duracion: 20 },
    { nombre: "Angular", duracion: 40 },
  ];

  const titulo = document.createElement("h2");
  titulo.textContent = "Cursos disponibles";
  titulo.classList.add("ej10-titulo");

  const ol = document.createElement("ol");
  ol.classList.add("ej10-lista");

  cursos.forEach((curso) => {
    const li = document.createElement("li");
    li.classList.add("ej10-curso");

    const nombre = document.createElement("strong");
    nombre.textContent = curso.nombre;
    nombre.classList.add("ej10-nombre");

    const duracion = document.createElement("span");
    duracion.textContent = ` – ${curso.duracion} horas`;
    duracion.classList.add("ej10-duracion");

    li.append(nombre, duracion);
    ol.append(li);
  });

  const container = document.createElement("div");
  container.append(titulo, ol);
  return container;
};
