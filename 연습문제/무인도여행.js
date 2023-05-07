function solution(maps) {
    const result = []
    maps = maps.map((m) => m.split(""))
    const dfs = (dx, dy) => {
        if (dx < 0 || dy < 0 || dx >= maps.length || dy >= maps[0].length || maps[dx][dy] === "X") return 0
        const now = parseInt(maps[dx][dy])
        maps[dx][dy] = "X"
        return now + dfs(dx - 1, dy) + dfs(dx + 1, dy) + dfs(dx, dy - 1) + dfs(dx, dy + 1)
    }
    for (let x = 0; x < maps.length; x += 1) {
        for (let y = 0; y < maps[x].length; y += 1) {
            if (maps[x][y] !== "X") result.push(dfs(x, y))
        }
    }
    return result.length ? result.sort((a, b) => a - b) : [-1]
}
