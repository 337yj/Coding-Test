const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(el=>el.trim().split(" ").map(el=>+el))

const [n, m] = input.shift();

let array = Array.from(Array(n), ()=> Array(m).fill(0))

for(let i=0; i<n; i++){
  for(let j=0; j<m; j++){
    array[i][j] = input[i][j] + input[i+n][j];
  }
}

let answer = "";
for(let i=0; i<n; i++){
  for(let j=0; j<m; j++){
    answer += array[i][j] + " "
  }
  answer += "\n"
}

console.log(answer);
