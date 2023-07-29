const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const N = Number(input);
const answer = [];
let cnt = 0;

function hanoi(n, from, other, to) {
  if (n === 0) {
    return;
  } else {
    hanoi(n - 1, from, to, other);
    answer.push([from, to]);
    cnt++;
    hanoi(n - 1, other, from, to);
  }
}

hanoi(N, "1", "2", "3");
console.log(cnt);
console.log(answer.map((i) => i.join(" ")).join("\n"));
