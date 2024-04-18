var s = 'my name is ankur'
var a = s.split(" ")

var temp = a[0];
a[0] = a[a.length - 1];
a[a.length - 1] = temp;

for (let i = 0; i < a.length; i++) {
    process.stdout.write(a[i] + " ");
}