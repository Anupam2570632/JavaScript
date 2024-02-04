function linearSearch(arr, length, key){
    for(var i = 0; i < length; i++) {
        if(arr[i] == key) {
            return true;
        }
    }
    return false;
}

var age = [19, 11, 15, 16, 21];
if(linearSearch(age, age.length, 21)) {
    console.log("Age found");
}
else {
    console.log("Age not found");
}
