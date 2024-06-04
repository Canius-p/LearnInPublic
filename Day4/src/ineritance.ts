//base or parent class representing a generic shape

class Shape {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  describe(): void {
    console.log(`this shape is at (${this.x},${this.y})`);
  }
}

//derived or child class Circle

class Circle extends Shape {
  radius: number;
  constructor(x: number, y: number, radius: number) {
    super(x, y); //calling parent class constructor

    this.radius = radius;
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}
