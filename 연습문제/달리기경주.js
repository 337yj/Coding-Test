function solution(players, callings) {
  const answer = [...players];
  const playerMap = {};

  for (let i = 0; i < players.length; i++) {
    playerMap[players[i]] = i;
  }

  for (let i = 0; i < callings.length; i++) {
    const curPlayer = callings[i];
    const curIdx = playerMap[curPlayer];
    const prevIdx = curIdx - 1;
    const prevPlayer = answer[prevIdx];

    [answer[curIdx], answer[prevIdx]] = [prevPlayer, curPlayer];
    [playerMap[curPlayer], playerMap[prevPlayer]] = [prevIdx, curIdx];
  }

  return answer;
}
