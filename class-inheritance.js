// class Animal {
//     constructor(name) {
//         this.name = name
//     }

//     speak() {
//         console.log(`I am ${this.name}`)
//     }
// }

// class Dog extends Animal {
//     constructor(name, owner) {
//         super(name)
//         this.owner = owner
//     }

//     speak() {
//         console.log("Bark")
//     }
// }

// class Cat extends Animal {
//     constructor(name) {
//         super(name)
//     }

//     speak() {
//         console.log("Meow")
//     }
// }

// const cat = new Cat("Pichu")
// console.log(cat.speak())

class Person {
    constructor(name) {
        this.name = name
    }
}

class Janitor extends Person {
    constructor(name, numberOfMops) {
        super(name)
        this.numberOfMops = numberOfMops
    }

    clean() {
        console.log(`${this.name} clean the floor by ${this.numberOfMops} mops`)
    }

}

const janitor = new Janitor("Shafin",6)

console.log(janitor.clean())