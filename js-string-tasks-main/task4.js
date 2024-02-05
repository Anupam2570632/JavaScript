// problem --- If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let str = "I want to got to coxes bazar by TAXI";

for (const char of str) {
    str = str.replace('x', 'y');
    str = str.replace('X', 'Y');
}

console.log(str);