const words = "I am a hard working person";

let newWords = words.split(" ");

let targetArr = [];
for(i = newWords.length - 1; i >= 0; i--) {
    let word = newWords[i];
    targetArr.push(word);
}

targetArr = targetArr.join(" ")

console.log(targetArr);
