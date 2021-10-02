//에라토스테네스의 체
"use strict";
const input = [];
const strToNumArr = (str) => str.split(" ").map(Number);
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line.trim());
  })
  .on("close", () => {
    const [B, E] = strToNumArr(input[0]);
    const isPrimeNum = Array(E + 1).fill(true);
    for (let n = 2; n <= Math.ceil(Math.sqrt(E)); n++) {
      isPrimeNum[1] = false;
      let m = 2;
      while (n * m <= E) {
        isPrimeNum[n * m] = false;
        m++;
      }
    }
    const answer = [];
    for (let n = B; n <= E; n++) {
      if (isPrimeNum[n]) {
        answer.push(n);
      }
    }
    console.log(answer.join("\n"));
  });
