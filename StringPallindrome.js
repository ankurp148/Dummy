var s = "madam"
var s1 = ""

for (let i = 0; i < s.length; i++) {
    s1 = s1 + s.charAt(i)
}
if (s1 === s) {
    process.stdout.write("---PALLINDROME---");
} else {
    process.stdout.write("---NOT PALLINDROME---");
}