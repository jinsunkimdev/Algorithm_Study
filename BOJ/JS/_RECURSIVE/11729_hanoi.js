//하노이의 탑 이동
"use strict";
let input = 0;
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input = Number(line.trim());
  })
  .on("close", () => {
    let count = 0;
    let answer = [];
    function hanoi(num, from, to, other) {
      // num: 원반의 수
      // from: 원반들이 위치한 곳의 번호
      // to: 원반들을 옮길 목적지 번호
      // other: 나머지 한 곳(목적지가 아닌) 곳 번호
      // 모두 옮겼으면 종료
      if (num === 0) {
        return;
      } else {
        // 가장 아래 원반을 제외한 원반들을 재귀적으로 목적지가 아닌 곳으로 옮김
        hanoi(num - 1, from, other, to);
        answer.push([from, to]);
        count++;
        // 목적지가 아닌 곳으로 옮겼던 원반들을 재귀적으로 목적지로 옮김
        hanoi(num - 1, other, to, from);
      }
    }
    hanoi(input, 1, 3, 2);
    console.log(count);
    console.log(answer.map((el) => el.join(" ")).join("\n"));
  });
