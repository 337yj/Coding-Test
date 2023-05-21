function solution(n, times) {
    let low = 1n;
    let high = 1_000_000_000n ** 2n;
    while (low <= high) {
        const mid = (low + high) / 2n;
        const people = times.reduce((acc, time) => acc + mid / BigInt(time), 0n);
        if (people < n) {
            low = mid + 1n;
        } else {
            high = mid - 1n;
        }
    }
    return low;
}
