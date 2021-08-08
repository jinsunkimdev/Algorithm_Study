//분수찾기
'use strict';
const readline = require('readline');
const rl =readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let inputNum = 0;
rl.on('line', (line) => {
	inputNum = Number(line);
}).on('close', () => {

	process.exit();
});