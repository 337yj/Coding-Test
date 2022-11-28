const num = 27;

// 1의 자리에 있는 수 구하기
num % 10 
// 7

// 10의 자리에 있는 수 구하기
Math.floor(num / 10)
// 2

// 1의 자리에 있는 수 10의 자리 수로 만들기
(num % 10) * 10
// 70

------------------------------------------------------------------------------

let input = Number(require('fs').readFileSync('/dev/stdin').toString());

let num = input;
let sum;
let i = 0;

while (true) {
  i++;

  sum = Math.floor(num / 10) + num % 10;
  num = (num % 10) * 10 + sum % 10; 

  if (input === num) {
    break;
  } 
}

console.log(i);
