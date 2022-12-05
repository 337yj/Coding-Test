let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i = 1; i <= Number(input[0]); i++) {
  let score = input[i].split(" ");
  let num = score.shift() * 1;
  let cnt = 0;

  let avg = score.reduce((acc, v) => acc + v * 1, 0);

  avg /= num;

  for (let j = 0; j < num; j++) {
    if (score[j] > avg) {
      cnt++;
    }
  }

  let result = ((cnt / num) * 100).toFixed(3);

  console.log(result + "%");
}
