//베르트랑 공준
"use strict";
const input = [];
//소수 구하는 함수
const getPrimeNumber = (begin, end) => {
  let isPrimeNumber = Array(end + 1).fill(true);
  isPrimeNumber[1] = false;
  for (let n = 2; n <= Math.ceil(Math.sqrt(end)); n++) {
    let m = 2;
    while (n * m <= end) {
      isPrimeNumber[n * m] = false;
      m++;
    }
  }
  const results = [];
  for (let n = begin; n <= end; n++) {
    if (isPrimeNumber[n]) results.push(n);
  }
  return results;
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line.trim());
  })
  .on("close", () => {
    const numArr = [];
    for (let n = 0; n < input.length; n++) {
      numArr.push(parseInt(input[n]));
    }
    for (let n = 0; n < numArr.length - 1; n++) {
      console.log(getPrimeNumber(numArr[n] + 1, 2 * numArr[n]).length);
    }
  });
