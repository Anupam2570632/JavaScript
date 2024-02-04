function binarySearch(arr, length, key) {
    var min = 0;
    var max = length - 1;
    while(min < max) {
        
        mid = parseInt((min + max) / 2);
        if(arr[mid] == key) {
            return true;
        }
        else if(arr[mid] > key) {
            max = mid - 1;
        }
        else if(arr[mid] < key) {
            min = mid + 1;
        }
        
    }
    return false;
}

var age = [11, 13, 16, 17, 21, 23];

if(binarySearch(age, age.length, 91)) {
    console.log("Age found");
}
else {
    console.log("Age not found");
}