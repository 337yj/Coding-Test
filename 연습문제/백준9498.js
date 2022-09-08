let input = require('fs').readFileSync('예제.txt')

const score = parseInt(input);

if(score >= 90){
  console.log('A');
} else if(score >= 80){
	console.log('B');
} else if(score >= 70){
	console.log('C');
} else if(score >= 60){
	console.log('D');
} else {
  console.log('F'); 
}


// const num = parseInt(input);

// if(num >= 90 && num <= 100){
//   console.log('A');
// } else if(num >= 80 && num <= 89){
// 	console.log('B');
// } else if(num >= 70 && num <= 79){
// 	console.log('C');
// } else if(num >= 60 && num <= 69){
// 	console.log('D');
// } else {
//   console.log('F'); 
  
