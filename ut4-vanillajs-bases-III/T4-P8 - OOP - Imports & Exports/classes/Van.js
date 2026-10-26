import { Vehicle } from "./Vehicle.js";

export class Van extends Vehicle {
  loadCapacity;
  constructor(vehicleData) {
    super(vehicleData);
    this.loadCapacity = vehicleData.loadCapacity;
  }

  getInfo() {
    return `${super.getInfo()}, Load Capacity: ${this.loadCapacity}`;
  }

  calculateRentalPrice(days) {
    return super.calculateRentalPrice(days) + days * 20; // Add a fixed fee of $20 for days
  }
}
