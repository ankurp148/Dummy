var s = 'eat an apple a day keeps doctor away';
var vowelcount = 0;
var consonantcount = 0;

for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == 'a' || s.charAt(i) == 'e' || s.charAt(i) == 'i' || s.charAt(i) == 'o' || s.charAt(i) == 'u') {
        vowelcount++;
    } else if (s.charAt(i) != ' ') {
        consonantcount++;
    }
}

console.log("Number of vowels:", vowelcount);
console.log("Number of consonants:", consonantcount);