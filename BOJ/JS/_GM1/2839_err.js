//설탕배달
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
  let bigSize = 5;
  let smallSize = 3;
  let answer = 0;
  if (inputNum <= 3) {
    console.log((answer = 1));
  } else if (inputNum > 3 && inputNum <= 5) {
    console.log((answer = 1));
  } else if (inputNum % 3 === 0 && inputNum % 5 === 0) {
    answer = Math.ceil(inputNum / 5);
    console.log(answer);
  } else if (inputNum > 5 && inputNum % 2 !== 0) {
    answer = Math.ceil(inputNum / 5);
  }
  process.exit();
});
