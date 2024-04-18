console.log("------------------1-----------------");
var n = 5;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i >= j) {
            process.stdout.write(i + "  ");
        }
        else {
            process.stdout.write("  ");
        }

    }
    console.log();

}
console.log("------------------2-----------------");
var n = 5;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i+j > n) {
            process.stdout.write(i + "  ");
        }
        else {
            process.stdout.write("   ");
        }

    }
    console.log();

}