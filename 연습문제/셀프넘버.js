function NotSelfnumber(N){

    let sum = N

    while(true){   
        if(N == 0) break;
        sum += N%10
        N = parseInt(N/10)
    }
    return sum; 
}

function selfnumber(N){
    let selfnum = []
    let result = []

    for(let i=1; i <= N; i++){
        let index = NotSelfnumber(i); 
        
        if(index <= N){
            selfnum[index] = true;
        }
    }

    for(let i=1; i<= N; i++){
        if(!selfnum[i]) result.push(i);
    }
    console.log(result.join('\n'));
}

selfnumber(10000);
