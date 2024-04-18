var s = 'ankur9140422586@#$%^'
var num = ''
var spl = ''
var alpha = ''
for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) >= '0' && s.charAt(i) <= '9') {
        num = num + s.charAt(i)
    }
    else if (s.charAt(i) >= 'a' && s.charAt(i) <= 'z') {
        alpha = alpha + s.charAt(i)
    }
    else {
        spl = spl + s.charAt(i)
    }

}
process.stdout.write(num + " ");
process.stdout.write(alpha + " ");
process.stdout.write(spl + " ");