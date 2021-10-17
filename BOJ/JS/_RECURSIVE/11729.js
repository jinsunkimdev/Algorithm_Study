let input = 0;
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input = Number(line.trim());
  })
  .on("close", () => {
    let count = 0;
    let answer = [];
    /**
     * input 원반의 갯수
     * from 처음 시작하는 장대
     * to 목표로 하는 장대
     * other 중간의 징검다리 역할 장대
     */
    const hanoi = (input, from, to, other) => {
      if (input === 0) return;
      if (input % 2 == 0) {
      }
    };
  });
