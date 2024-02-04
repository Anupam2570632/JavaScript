function findBigWord(string) {
    const word = string.split(" ");
    let bigWord = word[0];
    for (let i = 0; i < word.length; i++) {
        if (bigWord.length < word[i].length) {
            bigWord = word[i];
        }
    }
    return bigWord;
}

const result = findBigWord("I am learning Programming to become a programmer");
console.log(result);