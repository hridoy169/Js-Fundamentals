// // const array = ["A", "B", "C", "D", ["E", "F"]];
// //Array destructuring
// // const [first, second, third, fourth, [fifth, six]] = array

// // // const first = array[0]
// // // const second = array[1]

// // console.log(first)
// // console.log(second)
// // console.log(third)
// // console.log(fourth)
// // console.log(fifth)
// // console.log(six)

// // function addandMultiply(a, b) {
// //     return [a + b, a* b]
// // }

// // const [sum, products] = addandMultiply(2, 3)
// // console.log(sum)
// // console.log(products)

// //Object destructuring
// const person = {
//   name: "Hridoy",
//   age: 22,
//   favoriteFood: "Chicken",
//   address: { street: "143, East", city: "Dhaka", zipcode: "1215" },
// };

// // const { address } = person;

// const { address: {street,city, zipcode= "12345"}} = person

// // const name = person.name
// // const age = person.age

// // console.log(street);
// // console.log(city);
// // console.log(zipcode);

// // function addandMultiply(a, b) {
// //     return {sum: a + b, product: a* b}
// // }

// // const {sum, product: prod} = addandMultiply(2, 3)
// // console.log(sum)
// // console.log(prod)

// // //Exercise
// // function nameToFirstandLast(fullName) {
// //  return fullName.split(' ')
// // }

// // const [firstName, lastName] = nameToFirstandLast("KZR Hridoy")

// // console.log(firstName)
// // console.log(lastName)

// function addAndMultiply({a, b=4}) {
//     return [a+b, a*b]
// }

// const [sum, prod] = addAndMultiply({a:2})

// console.log(sum)
// console.log(prod)

