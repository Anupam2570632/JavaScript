// problem-----Count how many times a string has the letter a or A

const name = "My NAME is Apurbo aa Roy";
let count = 0;

for (let i = 0; i < name.length; i++) {
    if(name[i] === 'A' || name[i] === 'a') {
        count++;
    }
}

console.log(count);