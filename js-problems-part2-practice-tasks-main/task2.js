// problem : Find the friend with the smallest name.

function smallerName(friends) {
    let small = friends[0];
    for (let i = 0; i < friends.length; i++) {
        if (small.length > friends[i].length) {
            small = friends[i];
        }
    }
    return small;
}

const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let result = smallerName(friends);
console.log(result);