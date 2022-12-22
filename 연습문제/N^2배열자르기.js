function solution(n, left, right) {
    const ans = [];

    while (left <= right) {
        ans.push(Math.max(Math.floor(left / n), left++ % n) + 1);
    }

    return ans;
}
