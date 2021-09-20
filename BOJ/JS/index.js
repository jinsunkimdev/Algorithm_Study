"use strict";
import readline from "readline";
const readline = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let inputArr = [];
rl.on("line", (line) => {
  inputArr.push(Number(line));
}).on("close", () => {
  console.log(inputArr);
});
