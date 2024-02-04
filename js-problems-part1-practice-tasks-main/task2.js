function findElement(numbers, key) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === key) {
            count++;
        }
    }
    return count;
}


const numbers = [12, 13, 56, 33, 15, 66, 12, 10, 12];
const result = findElement(numbers, 11);
console.log(`Number found on the array ${result} time`);