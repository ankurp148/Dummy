var s = "i love india"

for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == 'a' || s.charAt(i) == 'e' || s.charAt(i) == 'i' || s.charAt(i) == 'o' || s.charAt(i) == 'u') {
        process.stdout.write(s.charAt(i));
    }
}