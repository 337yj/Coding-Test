const input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0].split(" ")[0]);
let k = Number(input[0].split(" ")[1]);
let ch = Array.from({ length: 100001 }, () => 0);

let queue = [];
queue.push(n);
ch[n] = 1;
let cnt = 0;

function BFS() {
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      if (x === k) return cnt;
      for (let nx of [x - 1, x + 1, x * 2]) {
        if (nx >= 0 && nx <= 100000 && ch[nx] === 0) {
          ch[nx] = 1;
          queue.push(nx);
        }
      }
    }
    cnt++;
  }
}

console.log(BFS());
