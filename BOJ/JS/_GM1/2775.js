// 부녀회장이 될 테야!
"use strict";
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let inputArr = [];
rl.on("line", (line) => {
	inputArr.push(line);
}).on("close", () => {
	// 처음에 주어지는 testcase
	let testCase = Number(inputArr.shift());
	let k; //층
	let n; //호
	for (let i = 0; i < testCase; i++) {
		k = +inputArr.shift();
		n = +inputArr.shift();
	}
	// 각방 선언할 2차원 배열
	const house = Array.from(Array(k + 1), () => Array(n + 1).fill(0));
	// 0층 i호에는 i명이 산다.
	for (let i = 1; i <= n; i++) {
		house[0][i] = i;
	}
	//1~k층 (k층n호에는 k-1층 n호+ k층 n-1호만큼 산다.)
	for (let i = 1; i <= k; i++) {
		for (let j = 1; j <= n; j++) {
			house[i][j] = house[i - 1][j] + house[i][j - 1];
		}
	}
	//k층 n의 인원수 출력
	console.log(house[k][n]);
	process.exit();
});
