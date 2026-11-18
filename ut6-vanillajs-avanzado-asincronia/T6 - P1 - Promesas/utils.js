import { Person } from "./Person.js";

export const exportToClassPersons = (peopleLiteralObject) => {
  return new Promise((resolve, reject) => {
    if (
      peopleLiteralObject !== null &&
      peopleLiteralObject !== undefined &&
      Object.keys(peopleLiteralObject).length > 0
    ) {
      const arrayOfPeople = Object.values(peopleLiteralObject); // como es un objeto de objetos literales recupero el array de los values
      const classOfPeople = arrayOfPeople.map((person) => {
        const newPerson = new Person(person.nombre, person.edad);
        return newPerson;
      });
      resolve(classOfPeople);
    } else {
      reject("The people literal object is not ok");
    }
  });
};
