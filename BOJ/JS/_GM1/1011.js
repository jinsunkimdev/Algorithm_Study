const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const inputStr = [];
rl.on("line", (line) => {
  inputStr.push(line);
}).on("close", () => {
  let inputStrNum = [];
  let count = Number(inputStr.shift());
  //count제외 숫자들 inputStrNum에 모두 집어넣음
  for (i = 0; i < inputStr.length; i++) {
    let testNum = inputStr[i].split(" ");
    testNum = testNum.map((input) => Number(input));
    inputStrNum.push(testNum);
  }
  //처음 작동시킬 때는 무조건1, 그 다음에는 0,1,2이고 도착 바로 직전 무조건1
  for (i = 0; i < count; i++) {
    let objectArr = inputStrNum[i];
    //출발지
    let start = objectArr[0] + 1;
    //도착지
    let arrival = objectArr[1] - 1;
    //최단기간까지 횟수
    let answer = 0;
    let diff = arrival - start;
    while (true) {
      if (diff === 1) {
        answer = answer + 1;
        break;
      } else if (diff > 1) {
        diff = diff - 2;
        answer = answer + 1;
      } else if (diff === 0) {
        break;
      }
    }
    console.log(answer + 2);
  }
  process.exit();
});
