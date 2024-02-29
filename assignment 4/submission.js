function calculateMoney(ticketSale) {

    // You have to write your code here

    if (ticketSale < 0) {

        return "Invalid Number";

    }

    return ((ticketSale * 120) - (500 + (50 * 8)));

}
console.log(calculateMoney(0))

function checkName(name) {

    //write your code here

    const word = ['a', 'e', 'i', 'o', 'u', 'w', 'y'];

    if (typeof name !== "string") {

        return "invalid";

    }

    else if (word.includes(name[name.length - 1].toLowerCase())) {

        return "Good Name";

    }

    else {

        return "Bad Name"

    }

}

function deleteInvalids(array) {

    // You have to write your code here

    const myArray = [];

    if (Array.isArray(array)) {

        for (let i = 0; i < array.length; i++) {

            if (typeof array[i] === 'number' && !isNaN(array[i])) {

                myArray.push(array[i]);

            }

        }

        return myArray;

    }

    else {

        return "Invalid Array";

    }

}

function password(obj) {

    //write your code here

    if (obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined) {

        return "invalid";

    }

    const birth = (obj.birthYear).toString();

    if (birth.length !== 4) {

        return "invalid";

    }

    else {

        obj.siteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);

        const result = obj.siteName + "#" + obj.name + "@" + obj.birthYear;

        return result;

    }

}

function monthlySavings(arr, livingCost) {

    // You have to write your code here

    if (Array.isArray(arr) && !isNaN(livingCost)) {

        let earn = 0;

        for (let i = 0; i < arr.length; i++) {

            if (arr[i] >= 3000) {

                earn += arr[i] - (arr[i] * 20) / 100;

            }

            else {

                earn += arr[i];

            }

        }

        const saving = earn - livingCost;

        if (saving >= 0) {

            return saving;

        }

        else {

            return "earn more";

        }

    }

    return "invalid input";

}