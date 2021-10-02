"use strict";
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let inputNum = 0;
rl.on("line", (line) => {
  inputNum = +line;
  rl.close();
}).on("close", () => {
  //function get all aliquot numbers
  const getAliquotArr = (number) => {
    let aliquotArr = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) aliquotArr.push(i);
    }
    return aliquotArr;
  };
  const getAnswer = (number) => {
    let aliquotArr = [];
    aliquotArr = getAliquotArr(number);
    let otherInputNum = number;
    for (let i = 1; i < aliquotArr.length; i++) {
      while (true) {
        if (otherInputNum % aliquotArr[i] === 0) {
          otherInputNum = otherInputNum / aliquotArr[i];
          console.log(aliquotArr[i]);
        } else break;
      }
    }
  };
  getAnswer(inputNum);
  process.exit();
});
