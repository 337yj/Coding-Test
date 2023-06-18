const input = require('fs').readFileSync("예제.txt").toString().trim().split('\n');
const N = +input[0];
//입력값의 두번째 ~ 마지막 값
const alphabet = input.slice(1);

let result = '';

for (let i = 0; i < N; i++) {
  const treeNode = {};
  //alphabet[i] = 두번째 줄부터 마지막 줄까지의 입력
  const [node, left, right] = alphabet[i].split(' ');
  //treeNode = {node: left, right, ...};
  treeNode[node] = [left, right];
}

function preOrder (node) {
	if (node === '.') {
      return;
    }
    
    const [left, right] = treeNode[node];
    result += node; 
    preOrder(left); 
    preOrder(right);
}

function inOrder (node) {
	if (node === '.') {
    	return;
    }
    
    const [left, right] = treeNode[node];
    result += node;
    inOrder(left);
    inOrder(right);
}

function postOrder (node) {
	if (node === '.') {
    	return;
    }
    
    const [left, right] = treeNode(node);
    postOrder(left);
    postOrder(right);
    result += node;
}

//root node는 A로 주어짐
preOrder('A');
result += '\n';
inOrder('A');
result += '\n'
postOrder('A');
result += '\n';

console.log(result);
