// 부녀회장이 될테야
"use strict";
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let inputArr = [];
//k-층,n-호
//1~k층 (k층 n호에는 k-1층 n호+k층 n-1호만큼 산다.)
rl.on("line", (line) => {
  inputArr.push(line);
}).on("close", () => {
  let inputArrNum = inputArr.map((el) => parseInt(el));
  let k = [];
  let n = [];
  //TestCase
  let number = inputArrNum.shift();
  for (let i = 0; i < number; i++) {
    k.push(inputArrNum.shift());
    n.push(inputArrNum.shift());
  }
  knArray.push(k, n);
  let floor = [];
  let sum = 0;
  for (let i = 0; i < knArray.length; i++) {
    k = knArray[i][0];
    n = knArray[i][1];
    for (let j = 0; j <= k; j++) {
      floor[j] = [];
      for (let m = 1; m <= n; m++) {
        if (j == 0) {
          floor[j].push(m);
        } else {
          sum += floor[j - 1][m - 1];
          floor[j].push(sum);
          if (m === n) {
            sum = 0;
          }
        }
      }
    }
    console.log(floor[k][n - 1]);
  }
  process.exit();
});
