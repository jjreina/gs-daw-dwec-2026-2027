// Ejercicio 2. Crear un contenedor con elementos anidados
/*
Salida HTML:
<div id="perfil">
  <h2>Perfil de usuario</h2>
  <p>Nombre: Ana López</p>
  <span>Activo</span>
</div>
*/
export const ejercicio2 = () => {
  const perfil = document.createElement("div");
  perfil.id = "perfil";

  const titulo = document.createElement("h2");
  titulo.textContent = "Perfil de usuario";

  const nombre = document.createElement("p");
  nombre.textContent = "Nombre: Ana López";

  const estado = document.createElement("span");
  estado.textContent = "Activo";

  perfil.append(titulo, nombre, estado);
  return perfil;
};
