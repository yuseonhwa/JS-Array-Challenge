const userHistory = [
  { date: "2020-11-03", watched: ["KT", "BBQ"] },
  { date: "2020-11-04", watched: ["정관장", "KT", "딱좋은데이"] },
  { date: "2020-11-05", watched: ["그랑사가", "농심"] },
  { date: "2020-11-06", watched: ["BBQ"] },
  { date: "2020-11-07", watched: ["쌍용자동차", "BBQ", "KT"] },
  { date: "2020-11-08", watched: ["켈로그코리아", "빙그레"] },
  { date: "2020-11-09", watched: ["KT", "그랑사가", "빙그레"] },
];

// write your codes
function solution(inputArray) {
  let watchList = [];
  userHistory.forEach((el) => (watchList = watchList.concat(el.watched)));
  return inputArray.filter((el) => !watchList.includes(el));
}

exports.solution = solution;
