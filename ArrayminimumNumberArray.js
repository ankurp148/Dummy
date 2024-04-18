const a = [8, 25, 14, 9, 24, 15, 11, 23]
let temp = 0

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {

        if (a[i] < a[j]) {
            temp = a[i]
            a[i] = a[j]
            a[j] = temp
        }
    }
}
console.log(a);
console.log("minimum no in array :" + a[0]);