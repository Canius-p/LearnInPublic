"use strict";
class coder {
    //this is assertion of new lang but it doesnt inittilize it
    constructor(name, age, lan) {
        this.name = name;
        this.age = age;
        this.lan = lan;
        this.name = name;
        this.age = age;
        this.lan = lan;
    }
}
class guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} plays ${action}`;
    }
}
