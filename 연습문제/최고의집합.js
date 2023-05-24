function solution(n, s) {
    const quotient = Math.floor(s / n);
    const remainder = s - quotient * n;
    return quotient
        ? [...Array(n - remainder).fill(quotient), ...Array(remainder).fill(quotient + 1)]
        : [-1];
}
