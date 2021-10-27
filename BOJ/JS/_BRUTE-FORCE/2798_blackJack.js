"use strict";
let input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line.trim());
  })
  .on("close", () => {
    //입력받은 숫자들을 변수에 각각 보관
    let number = input[0].split(" ");
    let cards = input[1].split(" ");
    const N = Number(number.shift());
    const M = Number(number.shift());
    cards = cards.map((el) => parseInt(el));
    //
    let sum = 0;
    for (let n = 0; n < N - 2; n++) {
      for (let m = n + 1; m < N - 1; m++) {
        for (let o = m + 1; o < N; o++) {
          let tempt = cards[n] + cards[m] + cards[o];
          if (tempt <= M && sum < tempt) {
            sum = tempt;
          }
        }
      }
    }
    console.log(sum);
  });
