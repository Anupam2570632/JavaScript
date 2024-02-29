function tellJoke() {
    console.log("Why don't scientists trust atoms? Because they make upeverything!");
}

const jokeInterval = setInterval(tellJoke, 2000);

// After 10 seconds, stop telling jokes

setTimeout(() => {

    clearTimeout(jokeInterval);
    
}, 10000);