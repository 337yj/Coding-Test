a, b, c = map(int, input().split())

if a == b == c:
    print(10000+a*1000)
elif a == b:
    print(1000+a*100)
elif a == c:
    print(1000+a*100)
elif b == c:
    print(1000+b*100)
else:
    print(100 * max(a,b,c))

    
--------------------------------------------js

const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split(" ")
    .map((value) => +value);

input.sort(function (a, b) {
    return b - a;
});

const [A, B, C] = input;

if (A !== B && A !== C && B !== C) {
    console.log(A * 100);
} else if (A === B && B !== C) {
    console.log(1000 + A * 100);
} else if (B === C && C !== A) {
    console.log(1000 + C * 100);
} else if (C === A && A !== B) {
    console.log(1000 + C * 100);
} else {
    console.log(10000 + A * 1000);
}
