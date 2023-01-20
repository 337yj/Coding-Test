function solution(files) {
  return files.sort((a, b) => {
    const aHead = a.match(/^\D+/)[0].toLowerCase();
    const bHead = b.match(/^\D+/)[0].toLowerCase();

    if(aHead < bHead) return -1;
    if(aHead > bHead) return 1;

    const aNum = a.match(/\d+/)[0].replace(/^0+/, '');
    const bNum = b.match(/\d+/)[0].replace(/^0+/, '');

    return aNum - bNum;
  });
}
