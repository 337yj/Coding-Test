function solution (n, stations, w) {
  let answer = 0;
  const coverage = w * 2 + 1;
  
  const endPoint = n - stations.reduce((prev, cur) => {
    const appartments = cur - w - 1 - prev;
    answer += appartments > 0 ? Math.floor((appartments - 1) / coverage) + 1 : 0;
    return cur + w;
  }, 0);
  
  if(endPoint > 0)
    answer += Math.floor((endPoint - 1) / coverage) + 1;
  
  return answer;
}
