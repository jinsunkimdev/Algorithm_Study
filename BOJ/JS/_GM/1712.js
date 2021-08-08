//손익분기점
'use strict';
const readline = require('readline');
const rl =readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let inputArr = [];
rl.on('line', (line) => {
	inputArr = line.split(' ');
	rl.close();
}).on('close', () => {
	let inputNumArr = [];
	inputNumArr = inputArr.map((el) => parseInt(el));
	const A = inputArr[0];
	const B = inputArr[1];
	const C = inputArr[2];
	const margin = C - B;
	const count = Math.floor(A / margin) + 1
	console.log(margin <= 0 ? -1 : count);
	process.exit();
}); 