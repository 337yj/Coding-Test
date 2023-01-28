const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input.shift();

const lines = input[0].split(' ').map(Number).sort((a,b) => a-b);

let answer = 0;
for(let i=0; i<N; i++) {
    let sum = lines[i];
    for(let j=0; j<i; j++) {
        sum += lines[j];
    }
    answer += sum;
}

console.log(answer);
