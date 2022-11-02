/**
 * @param s {string}
 * @returns {string}
 */
function solution(s) {
    let arr = [...s]

    const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
    const duplicates = findDuplicates(arr);
    return duplicates[0]
}
