function solution(n, info) {
  let maxDiff = 0;
  let ryonInfo = Array(11).fill(0);
  
  const shot = (peachScore, ryonScore, count, idx, board) => {
    if(n < count) return
    if(idx > 10){
      let diff = ryonScore - peachScore;
      if(diff > maxDiff){
        board[10] = n - count;
        maxDiff = diff
        ryonInfo = board;
      }
      return;
    }
    if(n > count) {
      let board2 = [...board];
      board2[10 - idx] = info[10 - idx] + 1;
      shot(peachScore, ryonScore + idx, count + info[10 - idx] + 1, idx + 1, board2);
    }
    
    if(info[10 - idx] > 0){
      shot(peachScore + idx, ryonScore, count, idx + 1, board)
    } else {
      shot(peachScore, ryonScore, count, idx + 1, board)
    }
  }
  shot(0, 0, 0, 0, ryonInfo)
  
  if(maxDiff <= 0) return [-1];
  else return ryonInfo;
}
