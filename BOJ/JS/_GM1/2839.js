//설탕배달
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let inputNum = 0;
rl.on("line", (line) => {
  inputNum = line;
  rl.close();
}).on("close", () => {
  let bigSize = 5;
  let smallSize = 3;
  let answer = 0;
  if (inputNum <= 3) {
    answer = 1;
  }
  if (inputNum > 3 && inputNum <= 5) {
    answer = 1;
  }
  if (inputNum % 3 === 0 && inputNum % 5 === 0) {
    answer = inputNum % 5;
  }
  console.log(answer);
  process.exit();
});
