// problem --- Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange']
let revColors = [];

for(let i = 0; i < colors.length; i++) {
    revColors.unshift(colors[i]);
}

console.log(revColors);