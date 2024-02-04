/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

// solution----------------
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("sum of 1 to 100 = ", sum);
