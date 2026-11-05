const app = document.querySelector("#app");

// Ejercicio 1. Crear encabezados y párrafos
const h1 = document.createElement("h1");
h1.textContent = "Desarrollo Web en Entorno Cliente";

const h2 = document.createElement("h2");
h2.textContent = "Unidad 5: DOM";

const p1 = document.createElement("p");
p1.textContent = "Aprendemos a crear elementos HTML.";

const p2 = document.createElement("p");
p2.textContent = "Utilizaremos JavaScript para modificar el documento.";

app.append(h1, h2, p1, p2);

// Ejercicio 2. Crear un contenedor con elementos anidados
app.append(document.createElement("hr"));
const perfil = document.createElement("div");
perfil.id = "perfil";

const titulo = document.createElement("h2");
titulo.textContent = "Perfil de usuario";

const nombre = document.createElement("p");
nombre.textContent = "Nombre: Ana López";

const estado = document.createElement("span");
estado.textContent = "Activo";

perfil.append(titulo, nombre, estado);
app.append(perfil);

// Ejercicio 3. Crear botones
app.append(document.createElement("hr"));
const contenedor_1 = document.createElement("div");

const botones = [
  { id: "guardar", texto: "Guardar" },
  { id: "cancelar", texto: "Cancelar" },
  { id: "eliminar", texto: "Eliminar" },
];

botones.forEach((datos) => {
  const boton = document.createElement("button");

  boton.id = datos.id;
  boton.type = "button";
  boton.textContent = datos.texto;

  contenedor_1.append(boton);
});

app.append(contenedor_1);

// Ejercicio 4. Crear campos de texto
app.append(document.createElement("hr"));
const contenedor_2 = document.createElement("div");

const campos = [
  { id: "nombre", texto: "Nombre", tipo: "text" },
  { id: "email", texto: "Correo electrónico", tipo: "email" },
  { id: "edad", texto: "Edad", tipo: "number" },
];

campos.forEach((campo) => {
  const div = document.createElement("div");

  const label = document.createElement("label");
  label.textContent = campo.texto;
  label.htmlFor = campo.id;

  const input = document.createElement("input");
  input.type = campo.tipo;
  input.id = campo.id;
  input.name = campo.id;

  div.append(label, input);
  contenedor_2.append(div);
});

app.append(contenedor_2);

// Ejercicio 5. Crear un área de texto
app.append(document.createElement("hr"));
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

app.append(label, textarea);

// Ejercicio 6. Crear una lista desplegable
app.append(document.createElement("hr"));
const label_1 = document.createElement("label_1");
label_1.textContent = "Lenguaje de programación";
label_1.htmlFor = "lenguaje";

const select = document.createElement("select");
select.id = "lenguaje";
select.name = "lenguaje";

const lenguajes = [
  { valor: "", texto: "Selecciona un lenguaje" },
  { valor: "js", texto: "JavaScript" },
  { valor: "python", texto: "Python" },
  { valor: "java", texto: "Java" },
  { valor: "php", texto: "PHP" },
];

lenguajes.forEach((lenguaje, indice) => {
  const option = document.createElement("option");

  option.value = lenguaje.valor;
  option.textContent = lenguaje.texto;

  if (indice === 0) {
    option.disabled = true;
    option.selected = true;
  }

  select.append(option);
});

app.append(label_1, select);

// Ejercicio 7. Crear botones de opción
app.append(document.createElement("hr"));
const fieldset = document.createElement("fieldset");

const legend = document.createElement("legend");
legend.textContent = "Turno de clase";

fieldset.append(legend);

const turnos = [
  { valor: "manana", texto: "Mañana" },
  { valor: "tarde", texto: "Tarde" },
  { valor: "noche", texto: "Noche" },
];

turnos.forEach((turno, indice) => {
  const div = document.createElement("div");

  const radio = document.createElement("input");
  radio.type = "radio";
  radio.id = turno.valor;
  radio.name = "turno";
  radio.value = turno.valor;

  if (indice === 0) {
    radio.checked = true;
  }

  const label = document.createElement("label");
  label.htmlFor = turno.valor;
  label.textContent = turno.texto;

  div.append(radio, label);
  fieldset.append(div);
});

app.append(fieldset);

// Ejercicio 8. Crear casillas de verificación
app.append(document.createElement("hr"));

const contenedor = document.createElement("div");

const tecnologias = [
  { valor: "html", texto: "HTML" },
  { valor: "css", texto: "CSS" },
  { valor: "javascript", texto: "JavaScript" },
  { valor: "typescript", texto: "TypeScript" },
];

tecnologias.forEach((tecnologia, indice) => {
  const div = document.createElement("div");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = tecnologia.valor;
  checkbox.name = "tecnologias";
  checkbox.value = tecnologia.valor;

  checkbox.checked = indice < 2;

  const label = document.createElement("label");
  label.htmlFor = tecnologia.valor;
  label.textContent = tecnologia.texto;

  div.append(checkbox, label);
  contenedor.append(div);
});

app.append(contenedor);

// Ejercicio 9. Crear una lista no ordenada
app.append(document.createElement("hr"));
const tecnologias_1 = ["HTML", "CSS", "JavaScript", "TypeScript", "Angular"];

const titulo_1 = document.createElement("h2");
titulo_1.textContent = "Tecnologías web";

const ul = document.createElement("ul");

tecnologias_1.forEach((tecnologia) => {
  const li = document.createElement("li");
  li.textContent = tecnologia;
  ul.append(li);
});

app.append(titulo_1, ul);

// Ejercicio 10. Crear una lista ordenada
app.append(document.createElement("hr"));
const cursos = [
  { nombre: "JavaScript", duracion: 30 },
  { nombre: "TypeScript", duracion: 20 },
  { nombre: "Angular", duracion: 40 },
];

const titulo_2 = document.createElement("h2");
titulo_2.textContent = "Cursos disponibles";

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

app.append(titulo_2, ol);
