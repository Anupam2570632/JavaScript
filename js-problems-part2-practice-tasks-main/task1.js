function findLowest(Numbers) {
    let lowest = Numbers[0];
    for (let i = 0; i < Numbers.length; i++) {
        if (lowest > Numbers[i]) {
            lowest = Numbers[i];
        }
    }
    return lowest;
}

const Numbers = [167, 190, 120, 165, 137];
const result = findLowest(Numbers);
console.log(result);