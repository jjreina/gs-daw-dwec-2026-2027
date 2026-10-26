import { Vehicle } from "./Vehicle.js";

export class Motorcycle extends Vehicle {
  engineCapacity;
  licenseType;
  constructor(vehicleData) {
    super(vehicleData);
    this.engineCapacity = vehicleData.engineCapacity;
    this.licenseType = vehicleData.licenseType;
  }

  getInfo() {
    return `${super.getInfo()}, Engine Capacity: ${this.engineCapacity}, License Type: ${this.licenseType}`;
  }

  calculateRentalPrice(days) {
    return super.calculateRentalPrice(days) + 15; // Add a fixed fee of $15.
  }
}
