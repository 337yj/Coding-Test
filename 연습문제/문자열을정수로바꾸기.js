function solution(s) {
  return +s
    .split("")
    .map((el) => {
      if (el === "-") return "-";
      else if (el === "+") return "+";
      return el;
    })
    .join("");
}


-------------------------------------------------------
  
  
function strToInt(str){
  return str/1
  }

console.log(strToInt("-1234"));


-------------------------------------------------------

  
function strToInt(str){
  return  +str;
}

console.log(strToInt("-1234"));
