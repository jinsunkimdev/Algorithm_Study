const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let inputNum = 0;
rl.on("line", (line) => {
  inputNum = Number(line);
  rl.close();
}).on("close", () => {
  let count = 0;
  let answer = 0;
  while (true) {
    if (inputNum % 5 === 0) {
      console.log(inputNum / 5 + count);
      break;
    }
    if (0 > inputNum) {
      console.log(-1);
      break;
    }
    count++;
    inputNum -= 3;
  }
  process.exit();
});
