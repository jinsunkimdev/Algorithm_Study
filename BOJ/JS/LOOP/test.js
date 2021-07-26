//"Case #x: A + B = C" print
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let input = [];
let inputNum = 0;
let numInput = [];
let answer = '';
rl.on('line', (line) => {
	input.push(line);
	inputNum = Number(input[0]);
}).on('close', () => {
	for(i=1; i<=inputNum; i++){
	numInput[i] = input[i].split(' ').map((el) => parseInt(el));
	let num1 = numInput[i][0];
	let num2 = numInput[i][1];
	answer += `Case #${i}: ${num1} + ${num2} = ${num1+num2}\n`;
	};
	console.log(answer);
	process.exit();
});