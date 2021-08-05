/*const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
rl.on('line', (line) => {
	const inputNumValue = Number(line);
	for(i=1; i<=inputNumValue; i++){
		console.log(i);
	};
	rl.close();//입력 종료
}).on('close', () => {
	process.exit();
});*/
let input = Number(require('fs').readFileSync('/dev/stdin').toString());

let answer = '';
for(i=1; i<=input; i++){
	answer += i + '\n';
};
console.log(answer);