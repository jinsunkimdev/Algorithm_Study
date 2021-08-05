//별 찍기 - 2
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let inputNum = 0;
let answer = '';
rl.on('line', (line) => {
	inputNum = Number(line);
	rl.close();
}).on('close', () => {
	for(let i=1; i<inputNum+1; i++){
		console.log(' '.repeat(inputNum-i) + "*".repeat(i));
	};
	process.exit();
});