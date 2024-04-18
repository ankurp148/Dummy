const from = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < from.length; i++) {
    if (from[i] % 3 === 0 && from[i] % 5 === 0) {
        console.log("divisible by 3 & 5: " + from[i]);
    } else if (from[i] % 3 === 0) {
        console.log("divisible by 3: " + from[i]);
    } else if (from[i] % 5 === 0) {
        console.log("divisible by 5: " + from[i]);
    } else {
        console.log(from[i]);
    }
}
