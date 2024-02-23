const people = [
    { name: "meena", age: 21 },
    { name: "reena", age: 27 },
    { name: "suchorita", age: 19 }
]
let totalAge = 0;
people.forEach(person => {
    totalAge += person.age;
})


// using reduce function
const total = people.reduce((totalA, person) => {
    return totalA + person.age;
}, 0)
console.log(total);