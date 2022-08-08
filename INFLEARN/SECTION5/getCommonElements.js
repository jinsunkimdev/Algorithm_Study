// 공통원소 구하기
/**
input
5
1 3 9 5 2
5
3 2 5 7 8
output
2 3 5
 */
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const solution = (input) => {
		let answer = []
		const N = Number( input.shift() )
		let nArr = input.shift().split(' ').map(Number)
		const M = Number( input.shift() )
		let mArr = input.shift().split(' ').map(Number)
		let p1= 0
		nArr.sort((a, b) => a - b)
		mArr.sort((a, b) => a - b)
		while(p1 < N)
		{
			if(nArr[p1] == mArr[p1]) 
			{ 
			  answer.push(nArr[p1])
			  console.log(answer)
			}
			  p1+=1 
		}
		console.log(answer)
		return answer
	}
	console.log( solution(input) )
})