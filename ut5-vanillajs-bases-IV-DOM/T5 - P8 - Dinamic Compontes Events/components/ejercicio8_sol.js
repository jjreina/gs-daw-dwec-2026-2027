// Ejercicio 8. Crear casillas de verificación
/*
Salida HTML:
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
*/
export const ejercicio8 = () => {
  const contenedor = document.createElement("div");

  const tecnologias = [
    { valor: "html", texto: "HTML" },
    { valor: "angular", texto: "Angular" },
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
    checkbox.classList.add("ej8-opcion");

    // checkbox.checked = indice < 2;

    checkbox.addEventListener("change", (e) => {
      const strongCurses = document.querySelectorAll(".ej10-nombre");
      const curse = Array.from(strongCurses).find((strongCurse) => {
        return strongCurse.textContent.toLowerCase() === e.target.value;
      });
      if (curse) {
        e.target.checked
          ? (curse.style.color = "green")
          : (curse.style.color = "red");
      }
    });

    const label = document.createElement("label");
    label.htmlFor = tecnologia.valor;
    label.textContent = tecnologia.texto;

    div.append(checkbox, label);
    contenedor.append(div);
  });

  contenedor.classList.add("ej8-contenedor");
  return contenedor;
};
