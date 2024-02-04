function isOdd(number) {
    if(number % 2 === 0) {
        return number / 2;
    }
    return number * 2;
}

let result = isOdd(13);
console.log(result);