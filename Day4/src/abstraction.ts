class car {
  private brand: string;
  private model: string;
  private speed: number;
  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
  }
  public accelerate(): void {
    this.speed += 10;
  }
  public brake(): void {
    this.speed -= 10;
  }
  public getSpeed(): number {
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
