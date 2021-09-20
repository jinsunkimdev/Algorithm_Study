const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let inputNum;
rl.on("line", (line) => {
  inputNum = line;
  let inputNumArr = inputNum.split(" ").map((el) => BigInt(el));
  let answer = 0;
  answer = inputNumArr[0] + inputNumArr[1];
  console.log(answer.toString);
}).on("close", () => {
  process.exit();
});
