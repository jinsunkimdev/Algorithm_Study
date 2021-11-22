"use strict";
const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line.trim());
  })
  .on("close", () => {
    //첫째 줄에 사람의 수 N
    const N = Number(input.shift());
    //몸무게와 키를 number로 변환
    const kgCmArr = input.map((kgCm) =>
      kgCm.split(" ").map((num) => parseInt(num))
    );
    const k = [];

    for (let i = 0; i < N; i++) {
      let counter = 0;
      for (let j = 0; j < N; j++) {
        if (i !== j) {
          if (kgCmArr[i][0] < kgCmArr[j][0] && kgCmArr[i][1] < kgCmArr[j][1]) {
            counter++;
          }
        }
      }
      k.push(counter + 1);
    }
    console.log(k.join(" "));
  });
