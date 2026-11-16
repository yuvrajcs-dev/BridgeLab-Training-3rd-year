
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Prototype method
Car.prototype.getDetails = function() {
    console.log("Brand: " + this.brand);
    console.log("Model: " + this.model);
};

// Creating objects
const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Mahindra", "Thar");

car1.getDetails();
car2.getDetails();
