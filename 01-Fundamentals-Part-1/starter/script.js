/*
//coments here
let js = 'amazing';
console.log(40 + 8 + 23 - 10)

console.log('Jonas');
console.log(23)

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'teacher';

let job1 = 'programmer'
let job2 = 'teacher'

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year)
console.log(typeof year);

year = 1991
console.log(typeof year)

console.log(typeof null);
*/

/*
let age = 30;
age = 31;

const birthYear = 1991;
//birthyear = 1990;

//const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);



//Math Operators
const now = 2021;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

let x = 10 + 5; // 15
x += 10; // x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge)
*/

//BMI = mass / height ** 2;

/*
let massMark = 78;
let heightMark = 1.69;
let markBMI = massMark / heightMark ** 2;

let massJohn = 92;
let heightJohn = 1.95;
let johnBMI = massJohn / heightJohn ** 2;

markHeigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHeigherBMI);

/////////////////////////////////////////////////

let massMark = 95;
let heightMark = 1.88;
let massJohn = 85;
let heightJohn = 1.76;

let markBMI = massMark / heightMark ** 2;
let johnBMI = massJohn / heightJohn ** 2;

let markHeigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHeigherBMI);
*/

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log("String with \n\ multiple \n\
 lines");
 */

/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log(`Sarah can start driving license!`)
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`)
}


const birthYear = 1991;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/*
let massMark = 95;
let heightMark = 1.88;
let massJohn = 85;
let heightJohn = 1.76;

let markBMI = massMark / heightMark ** 2;
let johnBMI = massJohn / heightJohn ** 2;

let markHeigherBMI = markBMI > johnBMI;
if (markHeigherBMI === true) {
    console.log(`Mark's BMI (${markBMI}) is bigger than John's BMI (${johnBMI}).`)
} else {
    console.log(`John's BMI (${johnBMI}) is bigger than Mark's BMI (${markBMI}).`)
}
//console.log(markBMI, johnBMI, markHeigherBMI);
*/
/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion

console.log('I am ' + 23 + ' years old.');
console.log('23' - '10' - 3);
console.log('23' / "2");
console.log('23' > '18');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);
*/


/*
// 5 falsy values: 0, '', undefined, null, NaN.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!')
}

let height;
if (height) {
    console.log('Yay! Height is defined.');
} else {
    console.log('Height is UNDEFINED.')
}
*/
/*
const age = '18';
if (age === 18) console.log('You just become an adult :D (strict)');

if (age == 18) console.log('You just become an adult :D (loose)');
*/

/*
const favourite = Number(prompt("What's youre favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number.')
} else if (favourite === 9) {
    '9 is also a good number'
} else {
    console.log('Number is not 23 or 7 or 9.')
}

if (favourite !== 23) console.log('Why not 23?')
*/
/*
const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense && hasGoodVision);

if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasDriversLicense && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}
*/

/*
class ResultInCompetition {
    constructor(scoreInFirstPart, scoreInSecondPart, scoreInThirdPart) {
        this.scoreInFirstPart = scoreInFirstPart;
        this.scoreInSecondPart = scoreInSecondPart;
        this.scoreInThirdPart = scoreInThirdPart;
    }
}

let dolphins = new ResultInCompetition(96, 108, 89);
let coalas = new ResultInCompetition(88, 91, 110);

sum = scoreInFirstPart + scoreInSecondPart + scoreInThirdPart;


console.log(dolphins(sum) > coalas(sum));
*/

/*
dolphins = 999;
koalas = 99;


if (dolphins < 100 || koalas < 100) {
    console.log("Minimum score must to be more than 100, sorry.");
}
else {
    if (dolphins > koalas) {
        console.log("Dolphins are winners!");
    } else if (dolphins < koalas) {
        console.log("Coalas are winners!");
    } else if (dolphins = koalas) {
        console.log("Teams are equal in theyr's result this time!");
    }
}

*/
/*
const day = 'saturday';

switch (day) {
    case 'monday': // day === 'monday';
        console.log('Plan course structure.');
        console.log('Go to coding meetup.');
        break;
    case 'tuesday':
        console.log('Prepare theory videos.');
        break;
    case 'wednesday':
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure.');
    console.log('Go to coding meetup.');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos.');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Record videos');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else (console.log('Not a valid day!'));
*/
/*
3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}

const age = 23;
age >= 18 ? console.log('I like to drink wine.') :
    console.log('I like to drink water.');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/

/*
bill = 275;
console.log(`The bill was ${bill}, the tip was ${bill >= 50 && bill <= 300 ? tip = bill * 15 / 100 : tip = bill * 20 / 100}, and the total value ${tip + bill}`);
*/

