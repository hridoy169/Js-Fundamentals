// function Person(name, age) {
//     this.name = name
//     this.age = age
// }

// Person.prototype.printName = function() {
//     console.log(this.name)
// }

// Person.goodName = "Hridoy"

// console.log(Person.goodName)

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   static goodName = 'Hridoy'
//   static printHi() {
//       console.log("Hi")
//   }

//   printName() {
//       console.log(this.name)
//   }
// }

// const person = new Person("Hridoy", 22)
// console.log(Person.goodName)

class createUser {
    constructor(email, password, language) {
        this.email = email
        this.password = password
        this.language = language
    }

    get name() {
        return this.email.split('@')[0]
    }

    set name(value) {
        const [,suffix] = this.email.split('@')
        this.email = value + '@' + suffix
    }   

    pritnPassword() {
        console.log(this.password)
    }
}

const user = new createUser("kzr@gmail.com","12345","Bangla")

user.name = "kzrhridoy"
console.log(user.email)
