"use strict";
// `keyof StringMap` resolves to `string` here
function createStringPair(property, value) {
    return { [property]: value };
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person, property) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person = {
    name: 'Max',
    age: 27,
};
printPersonProperty(person, 'name'); // Printing person property name: "Max"
