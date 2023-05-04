function solution(k, d) {
    let countStar = 0
    function getY(num) {
        return Math.sqrt(d**2 - num**2)
    }
    for(let i = 0 ; i <= d ; i += k) {
        countStar+=Math.floor(getY(i)/k)+1
    }
    return countStar
}
