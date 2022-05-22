// N번째 시리즈 입력받음
let N = require('fs').readFileSync('/dev/stdin').toString().trim()
// 666부터 1씩 늘려감
let num = 666
let count = 1
while(count !== Number(N))
{
	num++
	if(String(num).includes('666')) count++
}
console.log(num)