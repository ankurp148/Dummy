let s = "hello"

for (let i = s.length - 1; i >= 0; i--) {
    //   console.log(s.charAt(i));
    process.stdout.write(s.charAt(i));
}