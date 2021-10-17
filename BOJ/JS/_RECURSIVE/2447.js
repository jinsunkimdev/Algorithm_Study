let input = 0;
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input = line.trim();
  })
  .on("close", () => {
    let starLines = [];
    const star = (n, m, input) => {
      if (input == 1) {
        starLines.push("*");
      } else if (n % 3 == 1 && m % 3 == 1) {
        starLines.push(" ");
      } else {
        star(parseInt(n / 3), parseInt(m / 3), parseInt(input / 3));
      }
    };
    for (let n = 0; n < input; n++) {
      for (let m = 0; m < input; m++) {
        star(n, m, input);
      }
      starLines.push("\n");
    }
    console.log(starLines.join(""));
  });
