// 1. Functions
// function describeCountry(country, population, capitalCity) {
//   const countryInfo = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//   return countryInfo;
// }

// const country1 = describeCountry("Bangladesh", 165, "Dhaka");
// console.log(country1);

// const country2 = describeCountry("India", 500, "Mumbai");
// console.log(country2);

// const country3 = describeCountry("USA", 870, "Chicago");
// console.log(country3);

// 2. Function decalration vs expression
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const perecentageOfCountry1 = percentageOfWorld1(1441);
// const perecentageOfCountry2 = percentageOfWorld1(165);
// const perecentageOfCountry3 = percentageOfWorld1(126);
// console.log(
//   perecentageOfCountry1,
//   perecentageOfCountry2,
//   perecentageOfCountry3
// );

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// const perecentageOfCountry1 = percentageOfWorld2(1441);
// const perecentageOfCountry2 = percentageOfWorld2(165);
// const perecentageOfCountry3 = percentageOfWorld2(126);

// console.log(
//   perecentageOfCountry1,
//   perecentageOfCountry2,
//   perecentageOfCountry3
// );

// 3. Arrow function
// const percentageOfWorld3 = (population) => (population / 7900) * 100;

// const perecentageOfCountry1 = percentageOfWorld3(1441);
// const perecentageOfCountry2 = percentageOfWorld3(165);
// const perecentageOfCountry3 = percentageOfWorld3(126);

// console.log(
//   perecentageOfCountry1,
//   perecentageOfCountry2,
//   perecentageOfCountry3
// );

// 4. Functions Calling Other Functions

// const percentageOfWorld1 = (population) => (population / 7900) * 100;

// function describePopulation(country, population) {
//   const percentageOfCountry = percentageOfWorld1(population);

//   return `${country} has ${population} which is about ${percentageOfCountry}% of the world`;
// }

// console.log(describePopulation("China", 1441));
// console.log(describePopulation("Bangladesh", 165));
// console.log(describePopulation("USA", 870));

// 5. Arrays
// const populations = [165, 200, 870, 300];
// console.log(populations.length === 4);

// const percentageOfWorld1 = (population) => (population / 7900) * 100;

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);

// 6. Array Methods
// const neighbours = ["Bangladesh", "India", "China"];
// neighbours.push("Utopia");
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes("Germany")) {
//   console.log("Probably not a central European country :D");
// }

// neighbours[neighbours.indexOf("India")] = "Republic of India";
// console.log(neighbours);

// 7. Objects
// const myCountry = {
//   country: "Bangladesh",
//   capital: "Dhaka",
//   language: "Bangla",
//   population: 165,
//   neighbours: ["India", "Pakistan", "China"],
//   describe: function () {
//     console.log(
//       `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
//     );
//   },
//   checkIsland: function () {
//     this.isIsland = this.neighbours.length === 0 ? true : false;
//   },
// };

// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry);

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
// );

// myCountry.population += 2;
// console.log(myCountry);
// myCountry["population"] -= 2;
// console.log(myCountry);

// 8. For Loop
// for (let vote = 1; vote <= 50; vote++) {
//   console.log(`'Voter number ${vote} is currently voting`);
// }

// 9. Looping arrays
// const populations = [165, 200, 870, 300];
// const percentages2 = [];

// const percentageOfWorld1 = (population) => (population / 7900) * 100;

// for (let i = 0; i < populations.length; i++) {
//   const perc = percentageOfWorld1(populations[i]);
//   percentages2.push(perc);
// }

// console.log(percentages2);

// 9. Looping bckwards
// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let y = 0; y < listOfNeighbours[i].length; y++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
//   }
// }

//  10. While loop
// const populations = [165, 200, 870, 300];
// const percentages3 = [];

// const percentageOfWorld1 = (population) => (population / 7900) * 100;

// let i = 0;
// while (i < populations.length) {
//   const perc = percentageOfWorld1(populations[i]);
//   percentages3.push(perc);
//   i++;
// }
// console.log(percentages3);
