const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');



solution(input);

function solution(input) {
  let arr = [];
  for (let i = 1; i <= +input[0]; i++) {
    arr.push(+input[i]);
  }

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// 메모리 초과로 파이썬으로 
