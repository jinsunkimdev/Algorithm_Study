//벌집
'use strict';
const readline = require('readline');
const rl =readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let inputNum= 0;
rl.on('line', (line) => {
	inputNum = Number(line);
	rl.close();
}).on('close', () => {
	let count = 1;
	let maximum = 1;
	while(maximum < inputNum){
		maximum += count*6;
		count++;
	}
	console.log(count);
	process.exit();
});
