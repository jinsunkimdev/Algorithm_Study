'use strict'
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let inputNum;
rl.on('line', (line) => {
	inputNum = line;
	rl.close();
}).on('close', () => {
	console.log(inputNum.charCodeAt());
	process.exit();
});