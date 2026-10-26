import { Vehicle } from "./Vehicle.js";

export class Car extends Vehicle {
  doors;
  seats;
  constructor(vehicleData) {
    super(vehicleData);
    this.doors = vehicleData.doors;
    this.seats = vehicleData.seats;
  }

  getInfo() {
    return `${super.getInfo()}, Doors: ${this.doors}, Seats: ${this.seats}`;
  }

  calculateRentalPrice(days) {
    const basePrice = super.calculateRentalPrice(days);
    return days > 7 ? basePrice * 0.9 : basePrice; // Apply a 10% discount for rentals longer than 7 days
  }
}
