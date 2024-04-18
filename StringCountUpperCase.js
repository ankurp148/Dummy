var s = 'JanuaRY'
let count = 0
for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) >= 'A' && s.charAt(i) <= 'Z') {
        count++
        console.log(s.charAt(i));
    }
}
console.log(count);