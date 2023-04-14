var firstName;//undefined
firstName = "John";
console.log(firstName);

var lastName = "Doe";//Asignando y declarando
lastName = "Smith";//Reasignando
console.log(lastName);

var secondName = "John";
var secondName = "Joe";//Re-declarando y reasignando
console.log(secondName);

let fruit = "apple";
fruit = "banana";//Reasignando
console.log(fruit);

//No se puede re-declarar con let
//let fruit = "kiwi";//Re-declarando
console.log(fruit);

const animal = "dog";
//animal = "cat";//No se puede reasignar
console.log(animal);

const vehicle = [];
vehicle.push("car");
vehicle.push("truck");
console.log(vehicle);
vehicle.pop();
console.log(vehicle);