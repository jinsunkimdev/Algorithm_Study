// 큰 수 출력하기
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const N = input.shift()
	let numArr = input[0].split(' ').map(v => +v)
	const solution = (arr) => {
		let answer = []
		answer.push( arr[0] )
		for(let i = 1; i < N; i++)
		{
			if(arr[i] > arr[i - 1]) answer.push(arr[i]) 
		}
		return answer
	}
	console.log( solution(numArr) )
})
