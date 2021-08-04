//상수
'use strict';
const readline = require('readline');
const rl =readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let inputStr = '';
rl.on('line', (line) => {
	inputStr = line;
	rl.close();
}).on('close', () => {
	let inputStrArr = [];
	inputStrArr = inputStr.split(' ');
	let num1 = Number(inputStrArr[0].split('').reverse().join(''));
	let num2 = Number(inputStrArr[1].split('').reverse().join(''));
	num1 < num2 ? console.log(num2) : console.log(num1);
	process.exit();
});