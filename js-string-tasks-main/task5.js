// problem --- Capitalize Every first Letter of each word in a String

const str = "i am learning web development";
let result = "";
console.log(str.length);

for (let i = 0; i < str.length; i++) {
    if (i === 0) {
        result = result + str[i].toUpperCase();
    }
    else if (str[i] === ' ' && str[i + 1] !== ' ' && i !== str.length - 1) {
        result = result + str[i];
        result = result + str[i + 1].toUpperCase();
        i++;
    }
    else {
        result = result + str[i].toLowerCase();
    }
}

console.log(result);