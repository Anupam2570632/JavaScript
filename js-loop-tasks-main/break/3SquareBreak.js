/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

// Solution---------------
for (let i = 1; i <= 100; i++) {
    //Using library function
    /*if(Number.isInteger(Math.sqrt(i)) && i != 1) {
        console.log("Square number found")
        break;
    }*/
    if (isSquare(i) && i != 1) {
        console.log("Square number found");
        break;
    }

    console.log(i);
}
//Using function
function isSquare(number) {
    for (let i = 0; i * i <= number; ++i) {
        if (i * i == number) {
            return 1;
        }
    }
    return 0;
}