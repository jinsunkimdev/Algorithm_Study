//별 찍기 - 1
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let inputNum = 0;
answer = '';
rl.on('line', (line) => {
	inputNum = line;
	rl.close();
}).on('close', () => {
	for(let i=0; i<inputNum; i++){
		for(let j=0; j<=i; j++){
		answer += '*';
		}
	answer += '\n';
	}
	console.log(answer);
	process.exit();
});