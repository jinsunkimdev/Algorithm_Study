//달팽이는 올라가고 싶다
"use strict";
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let inputNumArr = [];
rl.on("line", (line) => {
	inputNumArr = line.split(" ");
	rl.close();
}).on("close", () => {
	let A = Number(inputNumArr[0]);
	let B = Number(inputNumArr[1]);
	let V = Number(inputNumArr[2]);
	let answer = 0;
	console.log(Math.ceil((V - B) / (A - B)));
	process.exit();
});
