var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

var cases = input[0];
var splited = input[1].split(' ');
var arr = [];
var stack = []; 
var count = {};

for(var c in splited){
    if(!count[splited[c]]){
        count[splited[c]] = 1;
    }else{
        count[splited[c]]++;
    }
}

for(var i=0; i< Number(cases); i++){
    while(stack.length!==0 && count[splited[i]] > count[splited[stack[stack.length-1]]]){
        arr[stack.pop()] = splited[i];
    }
    stack.push(i);
}

while(stack.length !== 0){
    arr[stack.pop()] = -1;
}

console.log(arr.join(' ').trim());
