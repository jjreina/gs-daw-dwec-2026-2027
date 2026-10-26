import { response } from "./vehicles-data.js";
import { Car } from "./classes/Car.js";
import { Motorcycle } from "./classes/Motocycle.js";
import { Van } from "./classes/Van.js";

const vehicles = [
  new Car(response.data[0]),
  new Motorcycle(response.data[1]),
  new Van(response.data[2]),
];

console.log("===== VEHICLE RENTAL SYSTEM =====");

vehicles.forEach((vehicle) => {
  console.log("Class:", vehicle.constructor.name);
  console.log(vehicle.getInfo());
  console.log(`Rental price (5 days): ${vehicle.calculateRentalPrice(5)} €`);
});

console.log("--------------------------------");
