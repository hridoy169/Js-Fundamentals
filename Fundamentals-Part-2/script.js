"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// Functions
/* function logger() {
  console.log("My name is Hridoy");
}

// calling/running/invoing the function
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

// Function declaration
/* function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1998);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);
*/

// Arrow function
/* const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirment = 65 - age;
  // return retirment;
  return `${firstName} retires in ${retirment} years`;
};

console.log(yearsUntilRetirement(1991, "Hridoy"));
*/

// Function calling other function
/* function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

// function calcAge(year) {
//   return 2037 - year;
// }

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = calcAge(birthYear);
//   const retirment = 65 - age;
//   if (retirment > 0) {
//     console.log(`${firstName} retires in ${retirment} years`);
//     return retirment;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, "Raju"));
// console.log(yearsUntilRetirement(1950, "Rana"));

// Coding challenge #1
// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreeKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreeKoalas);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins wins ${avgDolphins} vs ${avgKoalas}`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log("No team wins");
//   }
// }

// checkWinner(scoreDolphins, scoreeKoalas);

// Array
/* const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 2008, 2020, 2021);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Raju";
console.log(friends);

const firstName = "KZR";
const kzr = [firstName, "Hridoy", 2037 - 1998, "student", friends];
console.log(kzr);
console.log(kzr.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

// Array Methods
/* const friends = ["Michael", "Steven", "Peter"];
// Add elements
const newLength = friends.push("Raju");
console.log(friends);
console.log(newLength);

friends.unshift("Rana");
console.log(friends);

// Remove elements
const popped = friends.pop(); //Last elemt
console.log(popped);
console.log(friends);

friends.shift("Rana");
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Raju"));
console.log(friends.includes("Steven"));

if (friends.includes("Peter")) {
  console.log("You have a friend name Peter");
}
*/

// Coding challenge 2
// function calcTip(bill) {
//   if ((bill >= 50) & (bill <= 300)) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, total);

// Objects
/* const hridoy = {
  firstName: "KZR",
  lastName: "Hridoy",
  age: 22,
  job: "Student",
  friends: ["Raju", "Rana", "Shafin"],
};
console.log(hridoy);

console.log(hridoy.lastName);
console.log(hridoy["lastName"]);

const nameKey = "Name";
console.log(hridoy["first" + nameKey]);
console.log(hridoy["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Hridoy? Choose between firstName, lastName, age, job and friends"
// );

// if (hridoy[interestedIn]) {
//   console.log(hridoy[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job and friends"
//   );
// }

hridoy.location = "Dhaka";
hridoy["fb"] = "kzrhridoy";
console.log(hridoy);

// Challenge
console.log(
  `${hridoy.lastName} has ${hridoy.friends.length} friends & his best friend is called ${hridoy.friends[0]} `
);
*/

// Object methods
/* const hridoy = {
  firstName: "KZR",
  lastName: "Hridoy",
  birthYear: 1998,
  job: "Student",
  friends: ["Raju", "Rana", "Shafin"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    if (this.hasDriversLicense) {
      console.log(
        `${this.lastName} is a ${this.calcAge()} years old ${
          this.job
        }, and has a drivers license`
      );
    } else if (!this.hasDriversLicense) {
      console.log(
        `${this.lastName} is a ${this.calcAge()} years old ${
          this.job
        }, and has no drivers license`
      );
    }
  },
};

console.log(hridoy.calcAge());
console.log(hridoy.age);
console.log(hridoy.getSummary());
*/

// Coding Challenge #3
// const bmiMark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const bmiJohn = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// console.log(bmiMark.calcBMI(), bmiJohn.calcBMI());

// if (bmiMark.bmi > bmiJohn.bmi) {
//   console.log(
//     `${bmiMark.fullName}'s BMI(${bmiMark.bmi}) is higher than ${bmiJohn.fullName}'s BMI (${bmiJohn.bmi})`
//   );
// } else if (bmiJohn.bmi > bmiMark.bmi) {
//   console.log(
//     `${bmiJohn.fullName}'s BMI(${bmiJohn.bmi}) is higher than ${bmiMark.fullName}'s BMI (${bmiMark.bmi})`
//   );
// }

// For Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weigths repitiion ${rep}`);
// }

// Looping arrays, breaking
/* const hridoy = [
  "KZR",
  "Hridoy",
  2037 - 1998,
  "student",
  ["Riajul", "Shafin", "Raju"],
  true,
];
const types = [];

for (let i = 0; i < hridoy.length; i++) {
  console.log(hridoy[i], typeof hridoy[i]);

  // types[i] = typeof hridoy[i];
  types.push(typeof hridoy[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// Continue and break
for (let i = 0; i < hridoy.length; i++) {
  if (typeof hridoy[i] !== "string") continue;

  console.log(hridoy[i], typeof hridoy[i]);
}
console.log("-------------break-----------");
for (let i = 0; i < hridoy.length; i++) {
  if (typeof hridoy[i] === "number") break;

  console.log(hridoy[i], typeof hridoy[i]);
}
*/

// Looping backwards
/* const hridoy = [
  "KZR",
  "Hridoy",
  2037 - 1998,
  "student",
  ["Riajul", "Shafin", "Raju"],
];

for (let i = hridoy.length - 1; i >= 0; i--) {
  console.log(i, hridoy[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifiting weight repition ${rep}`);
  }
}
*/

// While loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weigths repitiion ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   // console.log(`WHILE: Lifting weigths repitiion ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("loop is about to end");
// }

// Coding challenge 4
/* const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
  if ((bill >= 50) & (bill <= 300)) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  const bonus = bills[i] + tips[i];
  totals.push(bonus);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));
*/
