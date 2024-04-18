const array = [8, 25, 14, 9, 24, 15, 11, 23]
let temp = 0
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {

        if (array[i] > array[j]) {
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
}
console.log(array);