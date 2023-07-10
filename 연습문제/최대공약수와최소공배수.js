const input = require("fs").readFileSync("/dev/stdin").toString().trim();

var N = input.split(" ").map(Number);
const [a,b] = N;

while(N[0] % N[1] !== 0){
    let n = N[0]%N[1];
    if(n!==0){
        N[0] = N[1];
        N[1] = n;
    }
}

console.log(N[1]);
console.log((a*b)/N[1]);
