const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let inputArr = [];
let count;
let numbers = [];
rl.on('line', (line) => {
	inputArr.push(line);
}).on('close', () => {
	const count = parseInt(inputArr[0]);
	for(let i=1; i<=count; i++){
		let numbers = inputArr[i].split(' ').map((el) => {
			parseInt(el);
		});
		console.log(`numbers=${numbers}`);
		let num1 = numbers[0];
		let num2 = numbers[1];
		console.log(`num1=${num1}, num2=${num2}`);
		console.log(`inputArr=${inputArr}`);
	}
	process.exit();
});