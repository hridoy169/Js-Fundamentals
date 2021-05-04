// const map = new Map([
//     ["Bangladesh", "MRP"],
//     ["India", "Rupee"]
// ])
// console.log(map)

// const map = new Map([
//     [{a: 1}, "MRP"], //you can use any vlaue you want
//     ["India", "Rupee"]
// ])
// console.log(map)

// const user = {
//     name: 'Hridoy'
// }

// const map = new Map([
//     [1, "A"],
//     [2, "B"],
//     [3, "C"],
//     [4, "D"]
// ])
// map.delete(1)
// map.clear()
// map.set(5, "E")
// console.log(map.has(6))
// console.log(map)
// map.forEach((key, value) => {
//     console.log(key ,value)
// })

// const CURRENCY_MAP = {
//     "Bangladesh": "MRP",
//     India: "Rupee"
// }

// const currency = CURRENCY_MAP["India"]

// const CURRENCIES = [
//     {
//         name: "MRP", country: "Bangladesh"
//     },
//     {
//         name: "RUPEE", country: "India"
//     }
// ]

// const currency = CURRENCIES.find(c => c.country === "India").name

//Exercise
// const items = [
//   {
//     id: 1,
//     name: "Test",
//     description: "Desc",
//   },
//   {
//     id: 2,
//     name: "Test",
//     description: "Desc",
//   },
//   {
//     id: 3,
//     name: "Test",
//     description: "Desc",
//   },
// ];

// function getItem(id) {
//     return items.find(item => item.id === id)
// }

// console.log(getItem(2))

const items = new Map([
  [
    1,
    {
      id: 1,
      name: "Test",
      description: "Desc",
    },
  ],
  [
    2,
    {
      id: 2,
      name: "Test",
      description: "Desc",
    },
  ],
  [
    3,
    {
      id: 3,
      name: "Test",
      description: "Desc",
    },
  ],
]);

function getItem(id) {
  return items.get(id)
}

console.log(getItem(2));
