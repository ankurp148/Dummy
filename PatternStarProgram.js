console.log("------------------1-----------------");
var n = 5;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i >= j) {
            process.stdout.write("* ");
        }
        else {
            process.stdout.write(" ");
        }

    }
    console.log();

}

console.log("-------------------2----------------");

var n = 5;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i <= j) {
            process.stdout.write("* ");
        }
        else {
            process.stdout.write("  ");
        }

    }
    console.log();

}

console.log("------------------3-----------------");

var n = 5;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i + j < n) {
            process.stdout.write("* ");
        }
        else {
            process.stdout.write("  ");
        }

    }
    console.log();

}
console.log("-----------------4------------------");
var n = 4;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n * 2 - 1; j++) {
        if (i <= j && i + j <= n * 2) {
            process.stdout.write("* ");
        }
        else {
            process.stdout.write("  ");
        }

    }
    console.log();

}
console.log("-----------------5------------------");
var n = 4;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n * 2 - 1; j++) {
        if ((i + j >= n + 1) && (j - i <= n - 1)) {
            process.stdout.write("* ");
        }
        else {
            process.stdout.write("  ");
        }

    }
    console.log();
}
console.log("-----------------6------------------");
var n = 5;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i + j >= n + 1) {
            process.stdout.write("* ");
        }
        else {
            process.stdout.write("  ");
        }

    }
    console.log();
}


