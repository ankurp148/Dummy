var num = 20;

for (let i = 1; i <= num; i++) {
    var count = 0; 

    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            count++;
        }
    }
    if (count == 2) {
        console.log(i);
    }
}
