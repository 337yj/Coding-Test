const numbers = require('fs').readFileSync('예제.txt').toString().split(' ').map(Number);

const a = numbers[0];
const b = numbers[1];
const c = numbers[2];

let money = 0;
let maxNum = 0;

if(a === b && a === c){
  money = 10000 + a*1000;
} else if(a === b || a === c || b === c){
  if(a === b || a === c){
    money = 1000 + a*100;
  } else{
    money = 1000 + b*100;
  }
} else{
   maxNum = Math.max(...numbers);
   money = maxNum*100;
}

console.log(money);
