// 골드바흐의 추측
const input = [];
// 소수 구하는 함수
const getPrimeNum = (endNum) => {
  let isPrimeNum = Array(endNum + 1).fill(true);
  let results = [];
  for (let n = 2; n <= Math.ceil(Math.sqrt(endNum)); n++) {
    isPrimeNum[1] = false;
    let m = 2;
    while (n * m <= endNum) {
      isPrimeNum[n * m] = false;
      m++;
    }
  }
  for (let n = 2; n <= endNum; n++) {
    if (isPrimeNum[n]) results.push(n);
  }
  return results;
};
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line.trim());
  })
  .on("close", () => {
    let inputNum = [];
    inputNum = input.map((str) => Number(str));
    //테스트 케이스
    const testCase = inputNum.shift();
    //테스트 케이스별로 소수 구하기
    for (let n = 0; n < testCase; n++) {
      let testArr = getPrimeNum(inputNum[n]);
      //골드바흐 파티션 구하기
      let goldBaghPartician = [];
      let tour = 0;
      for (let m of testArr) {
        if (testArr.includes(inputNum[n] - m)) {
          goldBaghPartician.push([m, inputNum[n] - m]);
        }
      }
      let diff = [];
      for (let i = 0; i < goldBaghPartician.length; i++) {
        let getDiff = goldBaghPartician[i][1] - goldBaghPartician[i][0];
        if (getDiff >= 0) diff.push(getDiff);
      }
      let answer = goldBaghPartician[diff.indexOf(Math.min(...diff))];
      console.log(`${answer[0]} ${answer[1]}`);
    } //
  });
