const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
const [person1, person2] = input.shift().split(' ');
const m = +input.shift();
const relations = input.reduce((acc, v) => {
  const [parent, child] = v.split(' ');
  if (!acc[parent]) {
    acc[parent] = [child];
  } else {
    acc[parent].push(child);
  }
  if (!acc[child]) {
    acc[child] = [parent];
  } else {
    acc[child].push(parent);
  }
  return acc;
}, {});

const dfs = (start, target) => {
  const visited = Array(n + 1).fill(false);
  visited[start] = true;
  const stack = [[start, 0]];
  while (stack.length) {
    const [person, depth] = stack.pop();
    if (person === target) {
      return depth;
    }
    if (relations[person]) {
      relations[person].forEach(nextPerson => {
        if (!visited[nextPerson]) {
          visited[nextPerson] = true;
          stack.push([nextPerson, depth + 1]);
        }
      });
    }
  }
  return -1;
};

console.log(dfs(person1, person2));
