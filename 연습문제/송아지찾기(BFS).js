function solution(s, e){         
  let answer = "";
  let ch = Array.from({length:10001},()=>0);
  let dis = Array.from({length:10001},()=>0);
  let queue = [];
  ch[s] = 1; // 현수 출발지점 체크
  queue.push(s); // 현수 출발지점
  dis[s] = 0; // 현수 출발지점 체크 해지
  while(queue.length){
    let x = queue.shift();
    for(let nx of [x-1, x+1, x+5]){
      if(nx===e) return dis[x] + 1 // nx의 바로 윗 지점 +1 해야 nx값임
      if(nx>0 && nx<=10000 && ch[nx]===0){
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
  return answer;
}

console.log(solution(5, 14));  
//       5
//  -1   +1   +5
//   4    6   10
// 3 5 9 => 5는 이전에 해봤으니 생략해도됨 어차피 다음레벨에 +1하면 6나오는거니까
// 14가 나올 때까지 L++(만들어서 넣을 때 확인하고 return)


//--------------------------------------------------------------------

function solution(s, e){  
    let answer=0;
    let ch=Array.from({length:10001}, ()=>0);
    let queue=[];
    queue.push(s);
    ch[s]=1;
    let L=0;
    while(queue.length){
        let len=queue.length;
        for(let i=0; i<len; i++){
            let x=queue.shift();
            for(let nx of [x-1, x+1, x+5]){
                if(nx===e) return L+1;
                if(nx>0 && nx<=10000 && ch[nx]===0){
                    ch[nx]=1;
                    queue.push(nx);
                }
            }
        }
        L++;
    }
    return answer;
}
