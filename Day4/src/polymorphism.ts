// Parent class
abstract class Shape1 {
  abstract calculateArea(): number;
}

// Rectangle class
class Rectangle extends Shape1 {
  constructor(private width: number, private height: number) {
    super();
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

// Circle class
class Circle1 extends Shape1 {
  constructor(private radius: number) {
    super();
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

// Triangle class
class Triangle extends Shape1 {
  constructor(private base: number, private height: number) {
    super();
  }

  calculateArea(): number {
    return 0.5 * this.base * this.height;
  }
}

// Function to calculate the area of any shape
function calculateShapeArea(shape: Shape1): number {
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
