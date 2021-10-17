//별 찍기-10
//3의 배수 가운데 뚫기
let input = 0;
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input = line.trim();
  })
  .on("close", () => {
    const lines = [];
    const printStars = (input) => {
      for (let n = 0; n < input; n++) {
        for (let m = 0; m < input; m++) {
          star(n, m, input);
        }
        lines.push("\n");
      }
    };
    const star = (n, m, input) => {
      if (n % 3 == 1 && m % 3 == 1) {
        lines.push(" ");
      } else {
        if (input == 1) {
          lines.push("*");
        } else {
          star(parseInt(n / 3), parseInt(m / 3), parseInt(input / 3));
        }
      }
    };
    printStars(input);
    console.log(lines.join(""));
  });
