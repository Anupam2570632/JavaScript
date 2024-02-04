let str = "I want to got to coxes bazar by TAXI";

for (const char of str) {
    str = str.replace('x', 'y');
    str = str.replace('X', 'Y');
}

console.log(str);