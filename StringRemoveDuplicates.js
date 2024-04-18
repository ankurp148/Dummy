var s = "annnkkkuur"
var s2 = ""
for (let i = 0; i < s.length; i++) {
    var count = 0
    for (let j = 0; j < s.length; j++) {
        if (s.charAt(i) == s.charAt(j)) {
            if (i > j) {
                break
            }
            count++
        }
    }
    if (count < 2) {
        s2 = s2 + s.charAt(i);
    }
}
console.log(s2);


