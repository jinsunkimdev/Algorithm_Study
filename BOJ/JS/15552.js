const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let sum = '';
rl.on('line', (line) => {
	const inputNum = line.split(' ');
	if(inputNum.length === 2){
		const A = Number(inputNum[0]);
		const B = Number(inputNum[1]);
		sum += A+B + '\n';
	}
}).on('close', () => {
	console.log(sum);
	process.exit();
});