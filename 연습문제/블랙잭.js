const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N,M] = input.shift().split(" ");

const arr = input[0].split(" ").map(Number)

let max = 0

for(let i=0; i<N; i++){
  for(let j=0; j<N; j++){
    for(let k=0; k<N; k++){
      if(i==j || j==k || k==i){ // 다음 루프로
        continue;
      }
      const sum = arr[i] + arr[j] + arr[k]
      if(sum > max && sum <= M){
        max =sum
      }
      if(max == M){
        break
      }
    }
  }
}

console.log(max)
