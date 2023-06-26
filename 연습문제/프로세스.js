function solution(priorities, location) {
  const queue = priorities.map((priority, index) => ({ priority, index }));
  let printedCount = 0;
  
  while (queue.length) {
    const current = queue.shift();
    if (queue.some(item => item.priority > current.priority)) {
      queue.push(current);
    } else {
      printedCount++;
      if (current.index === location) {
        return printedCount;
      }
    }
  }
}
