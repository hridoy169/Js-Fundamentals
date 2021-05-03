function greet(firstName, lastName, {salutation ="Hi", suffix="Mr."}={}) {
    console.log(`${salutation} ${suffix} ${firstName} ${lastName}`)
}

greet("KZR", "Hridoy")