function solution(s) {
    var arr = s.split("");
    var rem = [];

    for (var val of arr) {
        if (val === rem[rem.length - 1]) {
        rem.pop();
        } else {
        rem.push(val);
        }
    }
    return rem.join("")
}
