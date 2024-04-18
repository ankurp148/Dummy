let s = [4, 6, 8, 11, 64, 2, 3, 87, 1, 6];
s.sort((a,b)=>a-b);

console.log(s.sort());
for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
}
