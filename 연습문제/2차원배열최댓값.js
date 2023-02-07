const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n')
.map((v) => v.split(' ').map(Number));


let row = 0;
let col = 0;
let max = 0;
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[0].length; j++) {
    if (input[i][j] > max) {
      max = input[i][j];
      row = i;
      col = j;
    }
  }
}

console.log(`${max}
${row + 1} ${col + 1}`);
