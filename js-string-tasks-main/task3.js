// problem ---- Check whether a string contains all the vowels a, e, i, o, u

const str = "I am a boy";

for (let i = 0; i < str.length; i++) {
    if(str[i] === 'a') {
        str[i] = 'b';
        console.log(str[i]);
    }
    else if(str[i] === 'A') {
        str[i] ='B';
    }
}
console.log(str);