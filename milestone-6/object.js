const instructor = [
    { name: 'nodi', age: 23, position: 'senior' },
    { name: 'Akil', age: 23, position: 'junior' },
    { name: 'Shobuj', age: 23, position: 'senior' }
];


// for (const name in instructor) {
//     if (instructor[name].position === 'senior') {
//         console.log(instructor[name].name);
//     }
// }

instructor.forEach(person => {
    if (person.position === 'senior') {
        console.log(person.name);
    }
})