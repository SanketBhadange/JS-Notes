//1.Constructor functions
//2.Prototype & Prototypal Inheritance
//3. Method Shadowing

// Constructor function for Car
function Car(name, model, year, color) {
    this.name= name;
    this.model = model;
    this.year = year;
    this.color = color;
    
    this.start = function() {
      console.log(`Starting the ${this.name} ${this.model}`);
    };
  }

  // Adding a shared prototype method
    Car.prototype.drive = function() {
    console.log(`${this.name} is driving.`);
  };
  
  // Creating car instances
  const car1 = new Car("Toyota", "Camry", 2022, "Blue");
  const car2 = new Car("Ford", "Mustang", 2023, "Red");
  
  // Using the car instances
  console.log(car1); // Car { make: 'Toyota', model: 'Camry', year: 2022, color: 'Blue' }
  console.log(car2); // Car { make: 'Ford', model: 'Mustang', year: 2023, color: 'Red' }

  // Using the shared prototype method
   car1.drive(); // Output: Toyota is driving.
   car2.drive(); // Output: Ford is driving.

  // Accessing properties and methods of instances
  console.log(car1.model);  //camry
  car1.start(); // Starting the Toyota Camry
  car2.start(); // Starting the Ford Mustang

  //The hasOwnProperty method checks if a property is directly defined on the object.
  console.log(car1.hasOwnProperty("name")); // true
  console.log(car1.hasOwnProperty("drive")); // false


  //METHOD SHADOWING

  // Constructor function for Car
    function Car(name, color) {
    this.name = name;
    this.color = color;
  }
  
  // Adding a shared method to the Car constructor's prototype
    Car.prototype.drive = function() {
    console.log(`${this.name} is driving.`);
  };
  
  // Child constructor function for ElectricCar
  function ElectricCar(name, color, batteryType) {
    Car.call(this, name, color); // Call the parent constructor to set name and color
    this.batteryType = batteryType;
  }
  
  // Inherit from Car prototype
  ElectricCar.prototype = Object.create(Car.prototype);
  
  // Adding a method specific to ElectricCar
  ElectricCar.prototype.charge = function() {
    console.log(`${this.name} is charging.`);
  };
  
  // Method shadowing in ElectricCar
  ElectricCar.prototype.drive = function() {
    console.log(`${this.name} is driving silently.`);
  };
  
  // Creating car instances
  const car1 = new Car("Toyota", "Blue");
  const eCar1 = new ElectricCar("Tesla", "Black", "Lithium-ion");
  
  // Using the drive method
  car1.drive();   // Output: Toyota is driving.
  eCar1.drive();  // Output: Tesla is driving silently.
  eCar1.charge(); // Output: Tesla is charging.