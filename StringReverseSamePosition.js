var s = 'my name is roy'

var s1 = s.split(' ')

for (let i = 0; i < s1.length; i++) {
    let s3 = s1[i]
    //console.log(s3);
    for (let j = s3.length - 1; j >= 0; j--) {
        process.stdout.write(s3.charAt(j));
    }
    process.stdout.write(" ");
}
process.stdout.write("----------done---------")
