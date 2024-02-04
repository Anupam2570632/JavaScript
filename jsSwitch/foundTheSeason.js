function getSession(month) {
    switch (month) {
        case 1:
        case 2:
        case 12:
            console.log("Winter");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
        case 9:
        case 11:
        case 10:
            console.log("Autumn");
            break;
        default:
            console.log("invalid month input");
    }

}


var month = 2;
getSession(month);