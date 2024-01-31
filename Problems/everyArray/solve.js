const mdnUrl = 'https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every'
function solution(inputArray) {
    console.log(inputArray)
    const newArr = []
    const isBelowThreshold = (currentValue) => currentValue % 2 === 0;

    return inputArray.every(isBelowThreshold)

}
const answer = solution([2,4,6,8])
console.log(answer)
exports.solution = solution;
