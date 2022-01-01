'use strict';

// const Person = function (firstName, birthYear) {
//   console.log(this);
//   // this.species = 'Homo sapiens';
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this!!! Very bad practice, duplicating code behind the scense.
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const severyn = new Person('Severyn', 2002);
// console.log(severyn);

// // 1. New {} is created;
// // 2. function is called, this = {};
// // 3. {} Linked to prototype;
// // 4. function automatically return {};

// const jonas = new Person('Jonas', 1991);
// const mathilda = new Person('Mathilda', 2017);

// console.log(jonas);
// console.log(mathilda);

// console.log(jonas instanceof Person);
// console.log({} instanceof Person);

// // Prototypes

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// console.log(Person.prototype);

// jonas.calcAge();
// severyn.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(mathilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// // Realy .prototype would be better to call more like: .prototypeOfLinkedObject
// // So- prototype of prototype is not prototype )))
// // console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species)
// console.log(jonas.species === mathilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 3, 3, 5, 6];
// console.log(arr.__proto__);
// console.log(arr.__proto__ == Array.prototype);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);
// console.dir(x => x + 1);

// // Coding challenge 1

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };

// Car.prototype.break = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.break();
// mercedes.break();

//////////////////////// ES6 Classes /////////////////////////////////

// class expression
// const personCl = class {};

// class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property;
//   calcAge() {
//     console.log(2021 - this.birthYear);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hey there!');
//     console.log(this);
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();

// console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
// jessica.greet();

// 1. Classes are not hoisted;
// 2. Class are first-class citizens;
// 3. Classes are executed in strict mode;

// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   }
// };

// console.log(account.latest);
// console.log(account.movements);
// account.latest = 50;
// console.log(account.latest);
// console.log(account.movements);
// jessica.calcAge();
// console.log(jessica.age);

// const walter = new PersonCl('Walter White', 1965);

// console.log(walter.fullName);
// PersonCl.hey();
// // walter.hey() will not work!;

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// steven.birthYear = 2002;

// steven.name = 'Steven';
// console.log(steven);
// steven.calcAge();

/////////////////////////////////////////////////////////////

// // Coding challenge 2

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     return (this.speed = speed * 1.6);
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`Speed of ${this.make} was increased to ${this.speedUS}`);
//   }

//   break() {
//     this.speed -= 5;
//     console.log(`Speed of ${this.make} was decreased to ${this.speedUS}`);
//   }
// }

// const ford = new Car('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.break();
// ford.speedUS = 50;
// console.log(ford);


// let number = 0;

// const increaseForOne = () => {
//   number++;
//   console.log(number);
// };

// const decreaseForOne = () => {
//   number--;
//   console.log(number);
// };

// window.addEventListener('click', increaseForOne);
// window.addEventListener('keypress', decreaseForOne);

// ////////////// Inheritance Between "Classes": Constructor function;

// const Person = function (firstNmae, birthYear) {
//   this.firstName = firstNmae;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2021 - this.birthYear);
// };

// const Student = function(firstName, birthYear, course) {
//   // this.firstName = firstName;
//   // this.birthYear = birthYear;
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes;
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(
//     `My name is ${this.firstName} and I study ${this.course}`
//   );
// };

// const mike = new Student('Mike', 2002, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);


// // Coding challenge 3

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };

// Car.prototype.break = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // Link the prototype
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = `${chargeTo}%`;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(`After accelerate speed is ${this.speed}km/h and charge is ${this.charge}`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.break();
// mercedes.break();

// const tesla = new EV('Tesla', 666, '100%');
// console.log(tesla);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.break();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();

/////////////////////////////////////////////////////////////////////////

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property;
//   calcAge() {
//     console.log(2021 - this.birthYear);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hey there!');
//     console.log(this);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     course = this.course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`)
//   }

//   calcAge() {
//     console.log(`I'm ${2021 - this.birthYear} years old, but as student I feel more like ${2021 - this.birthYear + 10}`)
//   }
// }

// const martha = new StudentCl('Martha Jones', 2002, 'Computer Science');
// martha.introduce();
// martha.calcAge();

/////////////////////////////////////////////////////////////////////////////////////////////

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear)
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steve = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`Hello, my name is ${this.firstName} and I study ${this.course}!`)
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 1992, 'Computer science');
// console.log(jay);
// jay.introduce();
// jay.calcAge();

/////////////////////////////////////////////////////////////////////////////////////

// class Account {
//   // 1) Public fields;
//   locale = navigator.language;
  
//   // 2) Private fields;
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     // this._movements = [];
//     // this.locale = navigator.language;
//     console.log(`Thanks for opening in account, ${owner}`);
//   };

//   // (App) Public Interface;
//   getMovements() {
//     return this.#movements;
//   };

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   };

//   withdraw(val) {
//     this.deposit(-val)
//     return this;
//   };

//   // _approveLoan(val) {
//   //   return true;
//   // };

//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//       return this;
//     }
//   }

//   // It works just in classes!!
//   static helper() {
//     console.log('Helper');
//   };

//   // Private methods works in all parts of code;
//   #approveLoan(val) {
//     return true;
//   };
// };

// const acc1 = new Account('Jonas', 'EUR', 1111);

// // acc1.movements.push(250);
// // acc1.movements.push(-140);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// // Of course acc1.#approveLoan() doesn't work;
// // And this will not work the same -> console.log(acc1.#movements);
// // acc1.approveLoan(1000);
// const call1 = acc1.getMovements();
// console.log(call1);

// console.log(acc1);
// console.log(acc1.pin);


// // Chaining
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
// console.log(acc1.getMovements());

/////////////////////////////////////////////////////////////////////////////////////////////

// Coding challenge 3

class CarCl {

 constructor (make, speed) {
  this.make = make;
  this.speed = speed;


};

accelerate() {
  this.speed += 10;
  console.log(this.speed);
  return this;
};

break() {
  this.speed -= 5;
  console.log(this.speed);
  return this;
};

get speedUS () {
  return this.speed / 1.6;
}

set speedUS (speed) {
  console.log(`I forgot an algorithm that must to be here))) Too lazy for search right now, sorry))`)
}
};


class EVCl extends CarCl {
  #charge;

constructor (make, speed, charge) {
  super( make, speed);
  this.#charge = charge;
};

        // Happens automaticly;
  // EV.prototype = Object.create(Car.prototype);

chargeBattery(chargeTo) {
  this.#charge = chargeTo;
  return this;
};

accelerate() {
  this.speed += 20;
  this.#charge--;
  console.log(`After accelerate speed is ${this.speed}km/h and charge is ${this.charge}`);
  return this;
};
};

// Link the prototype





const bmw = new CarCl('BMW', 120);
const mercedes = new CarCl('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.break();
mercedes.break();

const tesla = new EVCl('Tesla', 666, 100);
console.log(tesla);
console.log(tesla.speedUS);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.break();
tesla.accelerate().accelerate().accelerate().break().chargeBattery(50).accelerate();
// Of course doesn't work -> console.log(tesla.#charge)