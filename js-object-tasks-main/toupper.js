let sentence = "My name is anupam roy";

for (let i = 0; i < sentence.length; i++) {
    if(sentence[i] === ' ') {
        console.log(sentence.slice(sentence[i + 1]));
    }
}
