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
*/
export const ejercicio10 = () => {
  const cursos = [
    { nombre: "JavaScript", duracion: 30 },
    { nombre: "TypeScript", duracion: 20 },
    { nombre: "Angular", duracion: 40 },
  ];

  const titulo = document.createElement("h2");
  titulo.textContent = "Cursos disponibles";

  const ol = document.createElement("ol");

  cursos.forEach((curso) => {
    const li = document.createElement("li");

    const nombre = document.createElement("strong");
    nombre.textContent = curso.nombre;

    const duracion = document.createElement("span");
    duracion.textContent = ` – ${curso.duracion} horas`;

    li.append(nombre, duracion);
    ol.append(li);
  });

  const container = document.createElement("div");
  container.append(titulo, ol);
  return container;
};
