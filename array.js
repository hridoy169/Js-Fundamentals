const a = [1, 2, 3, 4, 5];

//forEach
// a.forEach((number, index) => {
//     console.log(number+ " " + index)
// })

//map
// const newA = a.map((number) => {
//     return number * 2
// })

// console.log(newA)

//filter
// const newA = a.filter((number) => {
//     return number > 2
// })

// console.log(newA)

//find
// const n = a.find(number => {
//     return number > 2
// })

// console.log(n)

//some
// const isTrue = a.some(number => {
//     return number > 2
// })

// console.log(isTrue)

//every
// const isTrue = a.every(number => {
//     return number > 2
// })

// console.log(isTrue)

//reduce
// const s = a.reduce((sum,number) => {
//     return sum + number
// }, 0)

// console.log(s)

// const items = [
//   { price: 10 },
//   { price: 20 },
//   { price: 14 },
//   { price: 1 },
//   { price: 6 }
// ];

// const total = items.reduce((sum, item) => {
//   return sum + item.price;
// }, 0);

// console.log(total);

//includes
const newA = a.includes(6)

console.log(newA)
