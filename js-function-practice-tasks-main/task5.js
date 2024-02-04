function odd_even(number) {
    if(number % 2 === 0) {
        return "even";
    }
    return "odd";
}

const number = 15;
let result = odd_even(number);
console.log(`The number ${number} is a ${result} number`);