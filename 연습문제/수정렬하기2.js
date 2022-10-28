let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
let result = input.sort((a,b) => a-b);

console.log(result.join('\n'));


--------------------------------------------------------------------------------py

import sys

n = int(input())
num = []
for _ in range(n):
    num.append(int(sys.stdin.readline()))

num.sort()

for i in num:
    print(i)
