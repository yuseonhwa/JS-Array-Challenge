// write your codes
function solution(inputArray) {
  let sum = 0;
  inputArray.forEach((el) => {
    sum += el;
  });
  return sum;
}

exports.solution = solution;
