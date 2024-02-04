const str = "my name is anupam roy";
let result = "";
console.log(str.length);

for (let i = 0; i < str.length; i++) {
    if (i === 0) {
        result = result + str[i].toUpperCase();
    }
    if (str[i] === ' ' && str[i+1] !== ' ' && i !== str.length-1) {
        if (i !== 0) {
            result = result + str[i];
        }
        result = result + str[i + 1].toUpperCase();
        i++;
    }
    else {
        if (i !== 0) {
            result = result + str[i];
        }
    }
}

console.log(result);