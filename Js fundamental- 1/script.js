//Values & variables
/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Hridoy");
console.log(23);

let firstName = "KZR";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let myFirstJob = "Coder";
let myCurrentJob = "Teacher"; //Descriptive variable naming

console.log(myFirstJob);
*/

//Data types
/* let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Hridoy");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
console.log(typeof null);
*/

//let, const and var
/* let age = 30;
age = 31;

const birthday = 1991;
// birthday = 1990;
// const job

var job = "programmer";
job = "coder";
*/

// Basic Operators
/* const now = 2037;
const ageHridoy = now - 1998;
const ageRaju = now - 2018;
console.log(ageHridoy, ageRaju);

console.log(ageHridoy * 2, ageHridoy / 10, 2 ** 3);

const firstName = "KZR";
const lastName = "Hridoy";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparison Operators
console.log(ageHridoy > ageRaju); // >, <. >=, <=
console.log(ageRaju >= 18);

const isFullAge = ageRaju >= 18;
console.log(now - 1998 > now - 2018);
*/

// Operator Precedencec
/* const now = 2037;
const ageHridoy = now - 1998;
const ageRaju = now - 2018;

console.log(now - 1998 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageHridoy + ageRaju) / 2;
console.log(ageHridoy, ageRaju, averageAge);
*/

// Coding Challenge 1
/* const massMarks = 78;
const heightMarks = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const bmiMarks = massMarks / heightMarks ** 2;
const bmiJohn = massJohn / heightJohn ** 2;
console.log(bmiMarks, bmiJohn);

const markHigherBMI = bmiMarks > bmiJohn;
console.log(markHigherBMI);
*/

// String & Template literals
/* const firstName = "Hridoy";
const job = "programmer";
const birthYear = 1998;
const year = 2037;

const hridoy = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(hridoy);

console.log(`Yo ma nigga!!!!!!`);
console.log(`Yo
ma
nigga`);
*/

// Decsion if-else statements
/* const age = 15;

if (age >= 18) {
  console.log("Raju can start driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`Raju is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2021;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

// Coding Challenge 2
/* const massMarks = 78;
const heightMarks = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const bmiMarks = massMarks / heightMarks ** 2;
const bmiJohn = massJohn / heightJohn ** 2;
console.log(bmiMarks, bmiJohn);

if (bmiMarks > bmiJohn) {
  console.log(`Mark's BMI (${bmiMarks}) is higher than John's! (${bmiJohn})`);
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's! $(${bmiMarks})`);
}
*/

// Type conversion
/* const inputYear = 1991;
console.log(Number(inputYear));
console.log(inputYear + 18);

console.log(Number("Hridoy"));
console.log(typeof NaN);

console.log(String(23));

// Type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");

let n = "1" + 1;
n = n - 1;
console.log(n);
*/

//Truth and Falsy values
/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Hridoy"));
console.log(Boolean({}));

const money = 0;
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("Yay height is defined");
} else {
  console.log("Height is undefined");
}
*/

// Equality operators
/* const age = "18";
if (age === 18) console.log("You just became an adult (strict");

if (age == 18) console.log("You just became an adult (loose)");

const favorite = Number(prompt("whats your favorite number?"));
console.log(favorite);

if (favorite === 23) {
  console.log("Cool! This is an amazing number");
} else if (favorite === 7) {
  console.log("7 is also a cool number!");
} else {
  console.log("Number is not 23 or 7");
}

if (favorite !== 23) {
  console.log("Why not the 23?");
}
*/

// Logical opeartors
/* const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}
*/

// Coding Challenge 3
// const avgScoreDolphins = (96 + 108 + 89) / 3;
// const avgScoreKoalas = (88 + 91 + 110) / 3;
// console.log(avgScoreDolphins, avgScoreKoalas);

// if (avgScoreDolphins > avgScoreKoalas) {
//   console.log("Team Dolphins wins");
// } else if (avgScoreKoalas > avgScoreDolphins) {
//   console.log("Team Koalas wins");
// } else if (avgScoreDolphins === avgScoreKoalas) {
//   console.log("Draw");
// }

// BONUS 1
// const avgScoreDolphins = (97 + 112 + 101) / 3;
// const avgScoreKoalas = (109 + 95 + 106) / 3;
// console.log(avgScoreDolphins, avgScoreKoalas);

// if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
//   console.log("Team Dolphins wins");
// } else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
//   console.log("Team Koalas wins");
// } else if (
//   avgScoreDolphins === avgScoreKoalas &&
//   (avgScoreDolphins >= 100) & (avgScoreKoalas >= 100)
// ) {
//   console.log("Draw");
// } else {
//   console.log("No one wins the trophy");
// }

// Switch statement
/* const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Preapare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Preapare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
}
*/

// Ternary operators
/* const age = 23;
// age >= 18
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink water");

const drink = age >= 18 ? "drink wine" : "drink water";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "drink wine" : "drink water"}`);
*/

// Coding challenge 4
// const bill = 275;

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(`“The bill was ${bill}, the tip was ${tip}, and the total value
//   ${bill + tip}`);
