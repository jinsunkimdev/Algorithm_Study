const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
const inputArr = [];
const numbers = [];
let count = 0;
rl.on('line', (line) => {
	inputArr.push(line);
}).on('close', () => {
	console.log(inputArr);
	for(let i=1; i<=Number(inputArr[0]); i++){
		console.log(inputArr);
		numbers = inputArr[i].split(' ');
		let str1 = numbers[0];
		let str2 = numbers[1];
		console.log(`Case #${i}: ${str1} + ${str2} = ${str1+str2}`);
	};
	process.exit();
});