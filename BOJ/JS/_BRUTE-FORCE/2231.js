"use strict";
let input = 0;
const constructorArr = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input = Number(line.trim());
  })
  .on("close", () => {
    const decompose = (n) => {
      //입력값이 아직 문자열이므로 분해해서 배열에 넣는다.
      const N = n.toString().split("");
      //reduce이용해서 계속 더해준다.
      return n + N.reduce((acc, num) => (acc += parseInt(num)), 0);
    };
    for (let i = 1; i <= input; i++) {
      if (decompose(i) === input) {
        constructorArr.push(i);
      }
    }
    if (constructorArr.length) {
      console.log(Math.min.apply(null, constructorArr));
    } else {
      console.log(0);
    }
  });
