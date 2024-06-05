"use strict";
// Parent class
class Shape1 {
}
// Rectangle class
class Rectangle extends Shape1 {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
// Circle class
class Circle1 extends Shape1 {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}
// Triangle class
class Triangle extends Shape1 {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }
    calculateArea() {
        return 0.5 * this.base * this.height;
    }
}
// Function to calculate the area of any shape
function calculateShapeArea(shape) {
    return shape.calculateArea();
}
// Creating instances of different shapes
const rectangle = new Rectangle(5, 10);
const circle = new Circle1(7);
const triangle = new Triangle(4, 6);
// Using the function with different shape objects
console.log('Area of Rectangle:', calculateShapeArea(rectangle)); // Outputs: 50
console.log('Area of Circle:', calculateShapeArea(circle).toFixed(2)); // Outputs: 153.94
console.log('Area of Triangle:', calculateShapeArea(triangle)); // Outputs: 12
