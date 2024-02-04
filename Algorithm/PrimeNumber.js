function isPrime(num) {
    for(var i = 2; i < num / 2; i++) {
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

if(isPrime(5)) {
    console.log("It is a prime number");
}
else {
    console.log("Not a prime number");
}