const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let inputArr = [];
rl.on("line", (line) => {
  inputArr.push(line);
}).on("close", () => {
  let count = Number(inputArr.shift());
  let xArr = [];
  let yArr = [];
  let inputNumArr = [];
  let xNum = 0;
  let yNum = 0;
  for (let i = 0; i < count; i++) {
    inputNumArr.push(inputArr[i].split(" ").map((el) => Number(el)));
    xArr[i] = inputNumArr[0][0];
    yArr[i] = inputNumArr[0][1];
    xNum = xArr[i] + 1;
    yNum = yArr[i] - 1;
    let answer = 2;
    let distance = 0;
    distance = yNum - xNum;
    while (true) {
      if (distance > 2) {
        answer = answer + 1;
        distance = distance - 2;
      } else if (distance === 2) {
        answer = answer + 1;
        console.log(answer);
        break;
      } else if (distance === 1) {
        answer = answer + 1;
        console.log(answer);
        break;
      }
    }
  }
  process.exit();
});
