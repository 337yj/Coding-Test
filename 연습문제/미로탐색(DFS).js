function solution(board){         
    let answer = 0;
    // 12시 3시 6시 9시 방향순으로 초기화
    // D(-1,0) D(0,1) D(1,0) D(0,-1)
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    
    function DFS(x,y){
      // 6행 6열에 도착하면
      if(x===6 && y===6) answer++;
      else{
        for(let k=0; k<4; k++){
          let nx = x + dx[k];
          let ny = y + dy[k];
          // 경계선 밖으로는 가면 안되고, board가 가려고 하는 지점이 방문한적 없을 때
          if(nx>=0 && nx<=6 && ny>=0 && ny<=6 && board[nx][ny]===0){
            board[nx][ny] = 1;
            DFS(nx, ny);
            board[nx][ny] = 0;
          }
        }
      }
    }
    // 출발지는 1로 체크
    board[0][0] = 1;
    DFS(0,0);
    return answer;
}

let arr=[[0, 0, 0, 0, 0, 0, 0], 
[0, 1, 1, 1, 1, 1, 0],
[0, 0, 0, 1, 0, 0, 0],
[1, 1, 0, 1, 0, 1, 1],
[1, 1, 0, 0, 0, 0, 1],
[1, 1, 0, 1, 1, 0, 0],
[1, 0, 0, 0, 0, 0, 0]];

console.log(solution(arr)); // 8
