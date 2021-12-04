'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created;
// 2. function is called, this = {}
// 3. {} linked to prototype;
// 4. function automaticly return {}

const mathilda = new Person('Mathilda', 2017);
const jack = new Person('Jack', 1975);
console.log(mathilda, jack);

console.log(jonas instanceof Person);

jonas.calcAge();
mathilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));

// if to be honest , it is more like - .prototypeOfLinkedObj

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, mathilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.dir(Person.prototype.constructor);

const arr = [3, 4, 5, 3, 2, 6, 8];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

// Challenge #1

const Car = function (model, speed) {
  this.model = model;
  this.speed = speed;
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`'${this.model}' going at ${this.speed} km/h`);
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`'${this.model}' going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
bmw.accelerate();
mercedes.accelerate();

// class expression
// const Person = class {}

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

// 1.Classes are NOT hoisted;
// 2.Classes are first-class citizens;
// 3.Classes are executed in strict mode.
