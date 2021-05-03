const array = ["A", "B", "C", "D"];
const numberArray = [2,3,4]
const person = {
  name: "Hridoy",
  age: 22,
  favoriteFood: "Chicken",
  address: { street: "143, East", city: "Dhaka", zipcode: "1215" },
};

// //Rest
// function sum(multiply, ...numbers) {
//     console.log(multiply)
//     console.log(numbers)
//     return multiply * numbers.reduce((sum, number) => {
//         return sum + number
//     },0)
// }

// // console.log(sum(2,3,5))
// //spread
// sum(...numberArray)

// function concatName(firstName, lastName) {
//     console.log(firstName + " " + lastName) 
// }

// const names = ["KZR", "Hridoy"]

// concatName(...names)

// const newArray = [...numberArray]
// numberArray.push(5)

// console.log(newArray)
// console.log(numberArray)

//use case of spread operator
// const divs = [...document.querySelectorAll("div")]

// divs.map(div =>{
//     console.log(div)
// })

// const {name, age, ...rest} = person
// console.log(name, age, rest)

// person2 = {...person, friend: "Sally"}
// console.log(person2)

const details = {
    name: "Riajul",
    age: 22
}

const person2 = {...details, ...person, favoriteNumber: 5}
console.log(person2)
