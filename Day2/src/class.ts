class coder {
  newlan!: string;
  //this is assertion of new lang but it doesnt inittilize it
  constructor(public name: string, public age: number, private lan: string) {
    this.name = name;
    this.age = age;
    this.lan = lan;
  }
}

interface Music {
  name: string;
  instrument: string;
  play(action: string): string;
}

class guitarist implements Music {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string): string {
    return `${this.name} plays ${action}`;
  }
}
