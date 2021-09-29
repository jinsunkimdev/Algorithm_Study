"use strict";
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//input variable
let inputNum = [];
rl.on("line", (line) => {
  inputNum.push(line);
}).on("close", () => {
  let count = inputNum.shift();
  let inputArr = inputNum[0].split(" ").map((str) => +str);
  let answer = 0;
  for (let i = 0; i < count; i++) {
    let acquiteNum = 0;
    for (let j = 1; j <= inputArr[i]; j++) {
      if (inputArr[i] % j === 0) {
        acquiteNum++;
      }
    }
    if (acquiteNum === 2) {
      answer++;
    }
  }
  console.log(answer);
});
