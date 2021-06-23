'use strict';
/* // Default Parameter
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH021');
createBooking('LH021', 2);
createBooking('B3212', undefined, 1000);
*/

/* // Passing arguments vs Reference
const flight = 'LH234';
const hridoy = {
  name: 'KZR Hridoy',
  passport: 224234242,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 224234242) {
    alert('Checked In');
  } else {
    alert('Wrong Passport!');
  }
};

// checkIn(flight, hridoy);
// console.log(flight);
// console.log(hridoy);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(hridoy);
checkIn(flight, hridoy);
*/

/* // Higher Order Function
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher order function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('javascript is the best!', upperFirstWord);
transformer('javascript is the best!', oneWord);

// Js uses callback all the time
const highFive = function () {
  console.log('👋');
};

document.addEventListener('click', highFive);
['hridoy', 'riajul', 'shafin'].forEach(highFive);
*/

/* // functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Hridoy');
greeterHey('Shafin');

greet('Hello')('Hridoy');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Hridoy');
*/

/* // Call and apply method
const lufthansa = {
  airline: 'Lufthansa',
  code: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`
    );
    this.bookings.push({ flight: `${this.code}${flightNum}, ${name}` });
  },
};

lufthansa.book(225, 'KZR Hridoy');
lufthansa.book(635, 'Riajul Islam');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  code: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does not work
// book(23, 'Shafin');

// Call method
book.call(eurowings, 23, 'Shafin');
console.log(eurowings);

book.call(lufthansa, 239, 'Raju');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  code: 'LX',
  bookings: [],
};

book.call(swiss, 239, 'Raju');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

// Bind method
// book.call(eurowings, 23, 'Shafin');

const bookEw = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEw(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);

bookEW23('Rana');
bookEW23('Toufiq');

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

/* // Coding Challenge 2
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get the answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n (Write option number)`
      )
    );
    console.log(answer);

    if (typeof answer === 'number' && answer < this.answers.length) {
      this.answers[answer]++;

      this.displayResults();
      this.displayResults('string');
    }
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // "Poll results are 13, 2, 4, 1"
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

const answerPoll = document.querySelector('.poll');
answerPoll.addEventListener('click', poll.registerNewAnswer.bind(poll));

// Data 1: [5, 2, 3]
// Data 2: [1, 5, 3, 9, 6, 1]
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
*/

/* // Immediately Invoked Function Expression (IIFE)
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate)

(() => console.log('This will Also never run again'))();

{
  const isprivate = 23;
  var notPrivate = 23;
}
// console.log(isPrivate);
console.log(notPrivate);
*/

/* // Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/

/* // Closures example
// Example 1
let f;

const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Reassigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are three groups each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
*/

// Challenge 2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
