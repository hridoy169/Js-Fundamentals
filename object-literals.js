const propertyName = "name";
const firstName = "Hridoy";
const age = 22;

const person = {
  [propertyName]: firstName,
  age,
  sayHi() {
    console.log("Hi");
  },
};

// person[propertyName] = firstName
console.log(person);
