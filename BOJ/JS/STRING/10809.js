//알파벳찾기
'use strict';
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let inputStr = '';
rl.on('line', (line) => {
	inputStr = line;
	rl.close();
}).on('close', () => {
	let alphabetArr = [];
	alphabetArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	for(let i=0; i<alphabetArr.length; i++){
		console.log(inputStr.indexOf(alphabetArr[i]));
	}
	process.exit();
});