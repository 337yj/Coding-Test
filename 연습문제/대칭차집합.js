const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = [+input[0].split(' ')[0], +input[0].split(' ')[1]];
const setA = new Set(input[1].split(' ').map((x) => +x));
const setB = new Set(input[2].split(' ').map((x) => +x));

Set.prototype.difference = function (set) {
  return new Set([...this].filter(e => !set.has(e)));
}

console.log(setA.difference(setB).size + setB.difference(setA).size);
