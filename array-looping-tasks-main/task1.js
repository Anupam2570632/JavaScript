const colors = ['red', 'blue', 'green', 'yellow', 'orange']
let revColors = [];

for(let i = 0; i < colors.length; i++) {
    revColors.unshift(colors[i]);
}

console.log(revColors);