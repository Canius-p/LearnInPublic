"use strict";
//base or parent class representing a generic shape
class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    describe() {
        console.log(`this shape is at (${this.x},${this.y})`);
    }
}
//derived or child class Circle
class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y); //calling parent class constructor
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
