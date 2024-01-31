
const mdn = 'https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach'
function solution(inputArray) {
    const arr = []
    /**
     * 1.  forEach는 순회 메서드다.
     * 2.  map 과 달리 forEach()는 항상 undefined를 반환하므로 체이닝이 불가하다.
     */
    inputArray.forEach((item)=> arr.push(item +'%'))
    return arr
}
const answer =  solution([100, 10, 20, 40])
console.log(answer)

exports.solution = solution;
