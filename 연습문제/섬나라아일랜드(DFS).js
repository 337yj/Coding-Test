function solution(board){  
    let answer=0;
    let n=board.length;
    let dx=[-1, -1, 0, 1, 1, 1, 0, -1];
    let dy=[0, 1, 1, 1, 0, -1, -1, -1];
    function DFS(x, y){
        // 섬 방문 체크 (바다로 바꿈)
       board[x][y]=0;
       for(let k=0; k<8; k++){
           let nx=x+dx[k];
           let ny=y+dy[k];
           if(nx>=0 && nx<n && ny>=0 && ny<n && board[nx][ny]===1){
               DFS(nx, ny);
           }
       } 
    }
    // 탐색
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            // 섬 발견
            if(board[i][j]===1){
                // 섬 발견됐으니 answer++
                answer++;
                DFS(i, j);
            }
        }
    }
    return answer;
}

let arr=[[1, 1, 0, 0, 0, 1, 0], 
         [0, 1, 1, 0, 1, 1, 0],
         [0, 1, 0, 0, 0, 0, 0],
         [0, 0, 0, 1, 0, 1, 1],
         [1, 1, 0, 1, 1, 0, 0],
         [1, 0, 0, 0, 1, 0, 0],
         [1, 0, 1, 0, 1, 0, 0]];

console.log(solution(arr)); // 5
