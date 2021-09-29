//소수
"use strict";
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const inputArr = [];
rl.on("line", (line) => {
  inputArr.push(+line);
}).on("close", () => {
  const start = inputArr.shift();
  const end = inputArr.shift();
  //소수를 넣을 배열
  let primeNumber = [];
  let total = 0;
  for (let i = start; i <= end; i++) {
    //약수의 갯수
    let acquiteNum = 0;
    //소수 구하기
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        acquiteNum++;
      }
    }
    if (acquiteNum === 2) {
      primeNumber.push(i);
      total += i;
    }
  }
  if (!primeNumber.length) {
    console.log(-1);
  } else {
    console.log(total);
    console.log(primeNumber[0]);
  }
  process.exit();
});
