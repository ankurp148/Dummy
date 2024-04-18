let s = "i love my country india"
let s1 = s.split(" ")
console.log(s1);
console.log(s1.length);
for (let i = s1.length - 1; i >= 0; i--) {
    process.stdout.write(s1[i] + " ");
}