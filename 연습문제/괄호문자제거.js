function solution(s){  
    let answer;
    let stack=[];
    for(let x of s){
        if(x===')'){
            // 첨으로 (가 pop했을 때 멈춤
            while(stack.pop()!=='(');
        }
        else stack.push(x);
    }
    answer=stack.join('');
    return answer;
}

let str="(A(BC)D)E(F)G(H)((IJ)KL)M(N)";
console.log(solution(str));
