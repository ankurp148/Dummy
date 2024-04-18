const array = [4, 5, 9, 3, 5, 7, 3, 2];
let sum = 0
for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
        sum = sum + array[i];
    }
}
console.log(sum);
