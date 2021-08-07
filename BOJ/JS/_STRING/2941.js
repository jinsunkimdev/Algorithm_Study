//croatia alphabet
'use strict';
const readline = require('readline');
const rl =readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let inputStr = '';
rl.on('line', (line) => {
	inputStr = line.trim();
	rl.close();
}).on('close', () => {
	let croatiaWords = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
	const solution = (inputStr) => {
	for (let alphabet of croatiaWords) {
		inputStr = inputStr.split(alphabet).join("S");
	}
	console.log(inputStr);
	return inputStr.length; 
	}
	console.log(solution(inputStr));
	process.exit();
});