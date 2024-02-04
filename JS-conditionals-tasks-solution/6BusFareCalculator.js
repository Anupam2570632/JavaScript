/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

// Solution-------------

const age = 34;
let ticketPrice = 800;

if (age < 10) {
    ticketPrice = 0;
}
// consider student age 10 to 27 here
else if (age >= 10 && age <= 27) {
    ticketPrice /= 2;
}

else if(age >= 60) {
    ticketPrice -= (ticketPrice*15)/100;
}

else {
    ticketPrice = ticketPrice;
}

console.log(ticketPrice);