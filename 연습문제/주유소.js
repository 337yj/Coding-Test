const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const n = +input[0];
const distance = input[1].split(" ").map(v => BigInt(v));
const price = input[2].split(" ").map(v => BigInt(v));

let curPrice = price[0];
let cost = 0n;

for (let i=0; i<n-1; i++) {
    cost += curPrice * distance[i];
    if (curPrice > price[i+1]) curPrice = price[i+1];
}

console.log(String(cost));
