import Prompt from "prompt-sync";
const prom = Prompt()
let s1 = prom("ENTER THE FIRST VALUE : ")
console.log(s1);

let s2 = prom("ENTER THE SECOND VALUE : ")
console.log(s2);

if (s1.length === s2.length) {
    var s3 = s1.split("").sort().join("")
    var s4 = s2.split("").sort().join("")
    if (s3 === s4) {
        console.log("ANAGRAM");
    } else {
        console.log("NOT ANAGRAM");
    }
}
else {
    console.log("NOT ANAGRAM");
}