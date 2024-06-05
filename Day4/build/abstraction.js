"use strict";
class car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this.speed = 0;
    }
    accelerate() {
        this.speed += 10;
    }
    brake() {
        this.speed -= 10;
    }
    getSpeed() {
        return this.speed;
    }
}
const mycar = new car('Ford', 'Mustang');
mycar.accelerate();
mycar.brake();
mycar.accelerate();
mycar.accelerate();
mycar.accelerate();
console.log(`current spped is`, mycar.getSpeed());
