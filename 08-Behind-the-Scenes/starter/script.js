'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `Oh, and you're a millenial, ${firstName}.`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       output = 'NEW OUTPUT!';
//     }
//     console.log(millenial);
//     //console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

//console.log(me);
//console.log(job);
//console.log(year);

//var me = 'Severyn';
//let job = 'bomj';
//const year = 1991;

//////IF YOU WANT TO GET AN ERRRORS//////

// Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

///////OR IF YOU WANT TO GET UNDEFINED////////

// Functions
// console.log(addDecl(2, 3));
// console.log(addExpr);
// console.log(addArrow);

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// //Example
// if (!numProducts) deleteShoppingCart();

// var numProducts = 18;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(x === window.y);
// console.log(x === window.z);

//console.log(this);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1991);

///// IN RESULT OF USING THIS WORD HERE WE CAN
//// COPY FUNCTION FROM ONE OBJECT TO ANOTHER,
//// BUT IT WILL USE DATA OF CURRENT OBJECT.
// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// ///// HERE WE HAVE AN ERROR BECAUSE OF THIS CAN'T FIND NEEDED WORD (whisch one year??? which one ThIs YeAr ???) IN GLOBAL SCOPE!
// const f = jonas.calcAge;
// f();

// var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     //console.log(this);
//     console.log(2037 - this.year);

// Solution 1
// const self = this; // self or that
// const isMillenial = function () {
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
// };

//Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: function () {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();
// jonas.calcAge();

// // argument keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// // var addArrow = (a, b) => {
// //   console.log(arguments);
// //   return a + b;
// // };
// // addArrow(2, 5, 8);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me', me);

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marrige:', jessica);
console.log('After marrige:', marriedJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const JessicaCopy = Object.assign({}, jessica2);
JessicaCopy.lastName = 'Davis';

JessicaCopy.family.push('Mary');
JessicaCopy.family.push('John');

console.log('Before marrige:', jessica2);
console.log('After marrige:', JessicaCopy);
