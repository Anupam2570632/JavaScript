function count_zero(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '0') {
            count++;
        }
    }
    return count;
}

const str = "011101101011";
let result = count_zero(str);
console.log(`Number of zero on ${str} is `, result);