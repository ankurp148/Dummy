var a = [1, 2, 4, 8, 4, 6, 8, 6, 7, 5, 2]

for (let i = 0; i < a.length; i++) {
    var count = 0;
    for (let j = 0; j < a.length; j++) {

        if (a[i] == a[j]) {
            if (i > j) {
                break
            }
            count++
        }

    }
    if (count >= 1) {
        console.log(a[i] + "--->" + count);
    }
}
