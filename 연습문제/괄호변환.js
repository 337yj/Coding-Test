function solution(p) {
    if (!p) return ""
    let [u, v] = ["", ""]
    let [a, b] = [0, 0]
    for (let i = 0; i < p.length; i += 1) {
        p[i] === `(` ? ++a : ++b
        u += p[i]
        if (a === b) {
            v = p.slice(i + 1, p.length)
            break
        }
    }
    if (u[u.length - 1] === `)`) return u + solution(v)
    else {
        u = u.slice(1, u.length - 1).split("")
        for (let i = 0; i < u.length; i += 1) u[i] = u[i] === `)` ? `(` : `)`
        return "(" + solution(v) + ")" + u.join("")
    }
}
