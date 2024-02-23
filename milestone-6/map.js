const arr = [1, 3, 5, 7, 9];
const oddArr = [];
for (let i = 0; i < arr.length; i++) {
    oddArr.push(arr[i] + 1);
}
console.log(oddArr);

//using library function

const newOddArr = arr.map(n => n + 1);

console.log(newOddArr);