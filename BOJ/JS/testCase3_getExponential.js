//get exponential with recursion function
"use strict";
let input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line.trim());
  })
  .on("close", () => {
    let [a, n] = input[0].split(" ").map((el) => parseInt(el));
    const exponential = (a, n) => {
      if (n == 0) {
        return 1;
      } else {
        return a * exponential(a, n - 1);
      }
    };
    let ans = exponential(a, n);
    console.log(ans);
  });

