'use strict';

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'j'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join(' - '));

/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('--------- FOREACH ----------');

// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// });

// //////////////////////////////////////////////

// console.log('--------- FOREACH ----------');

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement: ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// // 0: function(200)
// // 1: function(450)
// // 2: function(400)

// // ...

////////////////////////////////////////////////////
/////////////////////////////////////////////////////
////////////////////////////////////////////////////
/////////////////////////////////////////////////////
////////////////////////////////////////////////////

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  username: 'js',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  username: 'jd',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  username: 'stw',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  username: 'ss',
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
// Elements

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovement = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    accs.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} EUR`;
};

const calcDisplayOut = function (acc) {
  const balance = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = balance;
};

const interest = function (acc) {
  const chototam = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      //  console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${chototam} EUR`;
  return 0;
};

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // Delete account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  }
});

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(containerMovements.innerHTML);

// console.log('------- #1 Coding challenge --------');

// const checkDogs = function (juliaParam, kateParam) {
//   const julia = juliaParam;
//   const kate = kateParam;

//   let juliaCopy = julia.slice();
//   //console.log(juliaCopy);
//   juliaCopy = juliaCopy.slice(1, -2);
//   // console.log(juliaCopy);

//   const juliaAndKate = [...juliaCopy, ...kate];
//   //console.log(juliaAndKate);

//   juliaAndKate.forEach(function (yearsOld, i) {
//     if (yearsOld >= 3) {
//       console.log(
//         `Dog number ${i + 1} is and adult, and it's ${yearsOld} years old`
//       );
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // const eurToUsd = 1.1;

// // const movementsUSD = movements.map(mov => mov * eurToUsd);
// // console.log(movements);
// // console.log(movementsUSD);

// const deposits = movements.filter(function (mov, i, arr) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(movements);
// console.log(withdrawals);

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// Maximum value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

// const calcAverageHumanAge = function (ageOfDog) {
//   const humanAges = ageOfDog.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(humanAges);
//   const humanAgesJustAdults = humanAges.filter(age => age >= 18);
//   console.log(humanAgesJustAdults);
//   const average = humanAgesJustAdults.reduce((acc, age) => acc + age, 0);
//   console.log(average);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// PIPELINE
// const eurToUsd = 1.1;

// const totalDepositeUsd = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     console.log(arr);
//     return mov * eurToUsd;
//   })
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositeUsd);

// Arrow and with chains

// const calcAverageHumanAge = ageOfDog => {
//   const humanAges = ageOfDog
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   console.log(humanAges);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

//const account = accounts.find(acc => acc.owner === 'Jessica Davis');
//console.log(account);

// for (const account of accounts) {
//   if (account.owner === 'Jessica Davis') {
//     console.log(account);
//   }
// }

const updateUI = function (acc) {
  // Display movements
  displayMovement(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Display out
    calcDisplayOut(currentAccount);
    //Display interest
    interest(currentAccount);
    // Update UI
    updateUI(currentAccount);
  }
});
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    reciverAcc &&
    currentAccount.balance >= amount &&
    reciverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

console.log(movements);

// EQUALITY
console.log(movements.includes(-130));

// CONDITION
console.log(movements.some(mov => mov > 0));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separated callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
});

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const overalBalance = accounts
//   .flatMap(acc => acc.movements)
//   // .map(acc => acc.movements)
//   // .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// console.log(movements);

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
});

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
// x.fill(1);
x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements_value'),
    el => Number(el.textContent.replace('EUR', ''))
  );
  console.log(movementsUI);
});
