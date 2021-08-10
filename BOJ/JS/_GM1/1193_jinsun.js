//분수찾기
'use strict';
const readline = require('readline');
const rl =readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let inputNum;
rl.on('line', (line) => {
	inputNum = line;
	rl.close();
}).on('close', () => {
	const solve = () => {
		let line = 1;
		let sum = 0;
		while(true){
			sum += line;
			line++;//몇번 째 줄인지 알기 위해서 sum에 더하면서 동시에 1더함
			if(inputNum<=sum){
				//입력값보다 모든 줄의 분수 갯수가 같거나 크면 break
				line--;//1을 빼서 입력값(원하는 순번의 분수)이 포함된 그룹에서 시작하도록 만듬
				break;
			}
		}
		for(let i=1; i<line; i++){
			inputNum -= i;
		}//inputNum을 인덱스 1부터 시작하도록 감소시킴
		if(line%2 == 1){
			console.log(line-(inputNum-1) + "/" + inputNum);
		}else{
			console.log(inputNum + "/" + (line - (number -1)));
		}
	}
	solve();
	process.exit();
});