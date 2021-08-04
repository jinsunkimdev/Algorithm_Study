//단어의 개수
'use strict';
const readline = require('readline');
const rl =readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let sentenceStr = '';
rl.on('line', (line) => {
	sentenceStr = line;
	rl.close();
}).on('close', () => {
	let sentenceArr = [];
	sentenceArr = sentenceStr.trim().split(' ');
	if(sentenceArr[0]===''){
		console.log(0);
	}else{
	console.log(sentenceArr.length);
	}
	process.exit();
});