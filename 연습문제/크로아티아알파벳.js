let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim(); //길이를 셀 때 공백이 있는지 해당 공백도 세져서 처음부터 없애버렸다.

let regExp = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;;
let result = input.replace(regExp,' ');
console.log(result.length);
