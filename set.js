// const uniqueList = [1,2,3,4,5]
// const newNumber = 4

// if(!uniqueList.includes(newNumber)){
//     uniqueList.add(newNumber)
// }

// console.log(uniqueList)

// const set = new Set([1,2,3,4])
// set.add(5)
// set.add(4)
// console.log(set.has(2))
// set.delete(3)
// set.clear()
// console.log(set)

//exercise
function removeDups(array) {
    return [...new Set(array)]
}

console.log(removeDups([1,2,3,4,3,2,5]))