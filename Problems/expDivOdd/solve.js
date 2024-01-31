function solution(inputArray) {
    let cnt = 0
    for(let i =0;i<inputArray.length;i++){
        const ans = Math.pow(inputArray[i],2)%3
        if(ans%2 !== 0){
            cnt += Math.pow(inputArray[i],2)
        }
    }
    return cnt
}
const answer = solution([1, 7, 3, 4, 6])
console.log(answer)
exports.solution = solution;
