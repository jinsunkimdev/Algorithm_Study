//8월 1주차 - 부족한 금액 계산하기
'use strict';
const solution = (price, money, count) => {
	var answer = 0; 
	let total = 0; 
	for(let i = 1; i<=count; i++){
		total+=price*i
	}
	answer = total-money; 
	if(answer<=0) return 0; 
	return answer;
};