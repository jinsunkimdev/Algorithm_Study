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
	rl.close();
}).on('close', () => {
	let value = 1;
while (true) {
	inputNum -= value;
	if (inputNum<= 0) {
		inputNum+= value;
		break;
	}
	value++;
}
if (value % 2 === 1) {//나머지 1은  홀수
	console.log(`${value - (inputNum - 1)}/${1 + (inputNum - 1)}`);
} else {//짝수
	console.log(`${1 + (inputNum - 1)}/${value - (inputNum - 1)}`);
}
	process.exit();
});
