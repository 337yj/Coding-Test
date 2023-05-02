const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(v=>v.trim())
const [N,T] = input[0].split(' ').map(Number)
const nums = input[1].split(' ').map(Number)

let answer = 0;

for(let i = 0; i<nums.length; i++){
  let sum = 0;
  for(let j = i; j<nums.length; j++){
    sum+=nums[j]
    if(sum==T) answer++;
  }
}

console.log(answer)
