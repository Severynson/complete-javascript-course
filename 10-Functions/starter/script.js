'use strict';

// const bookings = [];

// const creatingBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// creatingBooking('LH123');
// creatingBooking('LH123', 2, 800);
// creatingBooking('LH123', 2);
// creatingBooking('LH123', undefined, 1000);

// const flight = 'LH234';
// const severyn = {
//   name: 'Severyn Kurach',
//   pasport: 43554646346,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.pasport === 43554646346) {
//     alert('Checked in');
//   } else {
//     alter('Wrong passport!');
//   }
// };

// checkIn(flight, severyn);
// console.log(flight);
// console.log(severyn);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('Hi)!');
// };
// document.body.addEventListener('click', high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');
// greet('Gidra');

// My way to make the same with arrow

// const greet = greeting => name => {
//   console.log(`${greeting} ${name}`);
// };
// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');
// greet('Gidra');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book: function (flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//   },
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   name: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // Doesn't work because of this
// // book(23, 'Sarah Williams');

// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   name: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// // Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// // Bind method
// // book.call(eurowings, 23, 'Sarah Williams');

// const bookEW = book.bind(eurowings);
// const bookLN = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Cooper');

// // With Event Listener
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = rate => value => value + value * rate;
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));

////////////////////////////////////////////////////////////////////////////

// let answer;

// const poll = {
//   question: 'What is your favorite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer: function () {
//     answer = Number(
//       prompt(
//         `${this.question} \n${this.options.join('\n')}\n (Write option number)`
//       )
//     );
//     //console.log(answer);
//   },
// };
// console.log(poll.answer);
// console.log(poll.answers);

// poll.registerNewAnswer();
// console.log(answer);

// document.querySelector('.poll').addEventListener('click', function () {
//   // if (answer === 'number' && answer < poll.answers.length) {
//   poll.answers[answer] = poll.answers[answer] + 1;
//   console.log(poll.answers);
//   // }
// });

// console.log(poll.answers);
//// console.log(answers);

//// poll.registerNewAnswer.answer

////////////////////////////////////////////////////////////////////////////
// (function () {
//   console.log('This will never run again');
// })();

// (() => console.log('This will never run again'))();

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

// const boardPassengers = function (n, wait) {
//   const perGrop = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGrop} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} second`);
// };

// boardPassengers(173, 5);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.body.addEventListener('click', function () {
    header.style.color = 'green';
  });
})();
