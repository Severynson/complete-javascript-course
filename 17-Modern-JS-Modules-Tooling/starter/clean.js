// const budget = [
//   { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
//   { value: -45, description: 'Groceries 🥑', user: 'jonas' },
//   { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
//   { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
//   { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
//   { value: -20, description: 'Candy 🍭', user: 'matilda' },
//   { value: -125, description: 'Toys 🚂', user: 'matilda' },
//   { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
// ];

// const spendingLimits = {
//   jonas: 1500,
//   matilda: 100,
// };

// const getLimit = user => spendingLimits[user]?.[user] ?? 0;

// const addExpence = function (value, description, user) {
//   if (!user) user = 'jonas';
//   user = user.toLowerCase();

//   // let lim;
//   // if (spendingLimits[user]) {
//   //   lim = spendingLimits[user];
//   // } else {
//   //   lim = 0;
//   // }

//   // const limit = spendingLimits[user] ? spendingLimits[user] : 0;
//   const limit = getLimit(user);

//   if (value <= limit) {
//     budget.push({ value: -value, description, user });
//   }
// };
// addExpence(10, 'Pizza 🍕');
// addExpence(100, 'Going to movies 🍿', 'Matilda');
// addExpence(200, 'Stuff', 'Jay');
// console.log(budget);

// const checkExpenses = function () {
//   for (const entry of budget) {
//     // let lim;
//     // if (spendingLimits[entry.user]) {
//     //   lim = spendingLimits[entry.user];
//     // } else {
//     //   lim = 0;
//     // }

//     // const limit = spendingLimits?.[entry.user] ?? 0;

//     entry.value < -getLimit(entry.user) && (entry.flag = 'limit');
//   }
// };
// checkExpenses();

// console.log(budget);

// const bigExpenses = function (limit) {
//   var output = '';
//   for (var el of budget) {
//     if (el.value <= -limit) {
//       output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
//     }
//   }
//   output = output.slice(0, -2); // Remove last '/ '
//   console.log(output);
// };


////////////////////////////////////////////////////////////////

'strict mode';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
// spendingLimits.jay = 200;

// const limit = spendingLimits[user] ? spendingLimits[user] : 0;
const getLimit = (limits, user) => limits?.[user] ?? 0;

// Pure function :D
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

// const checkExpenses2 = function (state, limits) {
//   return state.map(entry => {
//     return entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: 'limit' }
//       : entry;
//   });
//   // for (const entry of newBudget3)
//   //   if (entry.value < -getLimit(limits, entry.user)) entry.flag = 'limit';
// };

const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

// Impure
const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  // .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '');

  console.log(bigExpenses);

  // let output = '';
  // for (const entry of budget)
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};

logBigExpenses(finalBudget, 500);
