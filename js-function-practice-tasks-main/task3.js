function make_avg(len, numbers) {

    let sum = 0;
    for (const number of numbers) {
        sum = sum + number;
    }
    return (sum / len);
}
const numbers = [29, 16, 17, 25, 15, 12];
const size = numbers.length;
let result = make_avg(size, numbers);
console.log(result);