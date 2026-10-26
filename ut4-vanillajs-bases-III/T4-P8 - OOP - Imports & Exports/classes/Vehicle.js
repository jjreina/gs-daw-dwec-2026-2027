export class Vehicle {
  #id;
  #brand;
  #model;
  #year;
  pricePerDay;
  available;
  constructor(vehicleData) {
    this.#id = vehicleData.id;
    this.#brand = vehicleData.brand;
    this.#model = vehicleData.model;
    this.#year = vehicleData.year;
    this.pricePerDay = vehicleData.pricePerDay;
    this.available = vehicleData.available;
  }

  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id;
  }

  get brand() {
    return this.#brand;
  }

  set brand(brand) {
    this.#brand = brand;
  }

  get model() {
    return this.#model;
  }

  set model(model) {
    this.#model = model;
  }

  get year() {
    return this.#year;
  }

  set year(year) {
    this.#year = year;
  }

  getInfo() {
    return `ID: ${this.id}, Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Price per Day: ${this.pricePerDay}, Available: ${this.available}`;
  }

  calculateRentalPrice(days) {
    return this.pricePerDay * days;
  }

  isAvailable() {
    return this.available;
  }
}
