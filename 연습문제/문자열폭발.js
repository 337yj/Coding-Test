const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let str = input[0].trim();
let explode_str = input[1].trim();
let len = explode_str.length;
let stack = [];
for (let i = 0; i < str.length; i++) {
  let flag = false;
  if (str[i] === explode_str[len - 1]) {
    for (let j = 0; j < len - 1; j++) {
      if (stack[stack.length - (j + 1)] === explode_str[len - (j + 2)]) {
        continue;
      }
      flag = true;
      break;
    }
    if (flag) {
      stack.push(str[i]);
    } else {
      for (let k = 0; k < len - 1; k++) {
        stack.pop();
      }
    }
  } else {
    stack.push(str[i]);
  }
}
let result = stack.join("");
if (result === "") {
  console.log("FRULA");
} else {
  console.log(stack.join(""));
}
