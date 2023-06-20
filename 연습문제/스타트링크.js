const input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

let [F, S, G, U, D] = input[0].split(" ").map(Number);
let queue = [[S, 0]];
let ch = Array.from({ length: F + 1 }, () => 0);

function BFS() {
  while (queue.length) {
    let [floor, count] = queue.shift();
    if (floor === G) return count;
    for (let next of [floor + U, floor - D]) {
      if (next >= 1 && next <= F && ch[next] === 0) {
        ch[next] = true;
        queue.push([next, count + 1]);
      }
    }
  }
  return "use the stairs";
}

console.log(BFS());
