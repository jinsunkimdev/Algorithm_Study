//단어 공부
'use strict';
const readline = require('readline');
const rl =readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
rl.on('line', (line) => {
	const wordArr = line.toLowerCase();
	// 알파벳 a ~ z의 개수를 저장 할 배열을 0으로 채워줌
	const alphabetArr = new Array(26).fill(0);
	// console.log('a'.charCodeAt()); // 97, a가 97이므로 기준으로 사용
	for(let i=0; i<wordArr.length; i++){
		// ex) a = 97 => result[0] 에 1을 더해줌
		alphabetArr[wordArr.charCodeAt(i)-97]++;
	}
	// result에서 가장 큰 수 = 빈도수가 높은 문자 수
	const maxCount = Math.max(...alphabetArr);
	// 빈도수가 높은 배열의 인덱스
	const maxIndex = alphabetArr.indexOf(maxCount);
	// 최대빈도수 인덱스와 끝에서 확인한 최대빈도수 인덱스가 같으면 중복이 없음
	if(maxIndex === alphabetArr.lastIndexOf(maxCount)){
		console.log(String.fromCharCode(maxIndex+65));
	}else{
		console.log('?');
	}
	rl.close();
}).on('close', () => {
	process.exit();
});