var s = 'my name is ankur'
var s1 = s.split(" ");
var s2 = ''
for (let i = 0; i < s1.length; i++) {
    var s3 = s1[i]
    if (i == s1.length - 1) {
        for (let j = s3.length - 1; j >= 0; j--) {
            s2 = s2 + s3.charAt(j)
        }
    }
    else {
        s2 = s2 + s1[i] + " ";
    }
}
console.log(s2);
