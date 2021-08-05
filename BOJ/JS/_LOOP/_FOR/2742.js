const fs = require('fs');
let input = Number(require('fs').readFileSync('/dev/stdin').toString());
let answer = '';
for(i=input; i>0; i--){
	answer += i + '\n';
}
console.log(answer);