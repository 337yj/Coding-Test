function solution(s) {
    const subsets = s.substring(1, s.length-2).split('},')
    	.map(str=>str.substring(1).split(',')
        .map(v=>Number(v)));
 
    subsets.sort((a, b) => a.length - b.length);
 
    const ans = subsets.reduce((acc, subset) => {
        const value = subset.filter(v => !acc.includes(v))[0];
        acc.push(value);
        return acc;
    }, []);
    
    return ans;
}
