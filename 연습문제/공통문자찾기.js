function solution(words) {
  let hash = new Map(),
    hash2 = new Map();
  for (let char of words[0]) {
    hash.set(char, (hash.get(char) || 0) + 1);
  }
  words.shift();

  for (let word of words) {
    for (let char of word) {
      if (!hash.has(char) || hash.get(char) === 0) continue;
      hash2.set(char, (hash2.get(char) || 0) + 1);
      hash.set(char, hash.get(char) - 1);
    }
    hash = hash2;
    hash2 = new Map();
  }

  let result = [];
  for (let [key, value] of hash) {
    for (let i = 0; i < value; i++) {
      result.push(key);
    }
  }
  return result;
}

console.log(solution(['steasue', 'sasseysu', 'kseseas']));
console.log(solution(['ackky', 'kabck', 'yokkcs']));
console.log(solution(['longlong', 'longtong', 'longbig']));

// ['s', 's', 'e', 'a']
// ['k', 'k', 'c']
// ['l', 'o', 'n', 'g', 'g']
