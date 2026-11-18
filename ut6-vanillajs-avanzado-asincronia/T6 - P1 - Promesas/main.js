import { exportToClassPersons } from "./utils.js";
import { people } from "./mockPersons.js";

exportToClassPersons(people)
  .then((result) => {
    result.forEach((person) => {
      const p = document.createElement("p");
      p.textContent = `nombre: ${person.name}, edad: ${person.age}`;
      document.body.append(p);
    });
  })
  .catch((err) => {
    console.log(err);
  });
