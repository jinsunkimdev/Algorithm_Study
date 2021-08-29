const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let inputNum = [];
rl.on("line", (line) => {
  inputNum.push(line);
}).on("close", () => {
  let inputNumArr = inputNum.map((el) => Number(el));

  process.exit();
});
