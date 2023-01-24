function solution(X,Y){
    let countX = new Array(10).fill(0);
    const xArr = X.split("");
    
    xArr.forEach((item) => {
        countX[item]++;
    })
    
    let countY = new Array(10).fill(0);
    const yArr = Y.split("");
    
    yArr.forEach((item) => {
        countY[item]++;
    })
    
    let ans = [];
    
    countX.forEach((item, index) => {
        if(item !== 0 && countY[index] !== 0){
            const min = Math.min(item, countY[index]);
            
            ans.push(String(index).repeat(min));
        }
    })
    
    if(ans.length === 0){
        return "-1";
    }
    
    if(Number(ans.join("")) === 0){
        return "0";
    }
    
    return ans.reverse().join("");
}
