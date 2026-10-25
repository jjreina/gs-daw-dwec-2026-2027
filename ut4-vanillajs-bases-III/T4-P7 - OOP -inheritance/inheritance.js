const response = {
  status: "success",
  data: [
    {
      id: 1,
      type: "car",
      brand: "Toyota",
      model: "Corolla",
      year: 2023,
      pricePerDay: 45,
      available: true,
      doors: 5,
      seats: 5,
    },
    {
      id: 2,
      type: "motorcycle",
      brand: "Yamaha",
      model: "MT-07",
      year: 2022,
      pricePerDay: 30,
      available: true,
      engineCapacity: 689,
      licenseType: "A",
    },
    {
      id: 3,
      type: "van",
      brand: "Ford",
      model: "Transit",
      year: 2021,
      pricePerDay: 75,
      available: false,
      loadCapacity: 1200,
    },
    {
      id: 4,
      type: "car",
      brand: "Seat",
      model: "León",
      year: 2024,
      pricePerDay: 50,
      available: true,
      doors: 5,
      seats: 5,
    },
    {
      id: 5,
      type: "motorcycle",
      brand: "Honda",
      model: "CB500F",
      year: 2023,
      pricePerDay: 25,
      available: true,
      engineCapacity: 471,
      licenseType: "A2",
    },
    {
      id: 6,
      type: "van",
      brand: "Mercedes-Benz",
      model: "Vito",
      year: 2022,
      pricePerDay: 90,
      available: true,
      loadCapacity: 950,
    },
  ],
};

class Vehicle {
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

class Car extends Vehicle {
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

class Motorcycle extends Vehicle {
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

class Van extends Vehicle {
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
