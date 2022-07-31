// 등수 구하기
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const  N = input.shift()
	const numArr = input[0].split(' ').map(Number)
	const solution = (arr) => {
		let n = arr.length
		let answer = Array.from({length:n}, () => 1) // array 초기화
		for(let i = 0; i < n; i++)
		{
			for(let j = 0; j < n; j++)
			{
				if(arr[j] > arr[i]) answer[i]++
			}
		}
		return answer
	}
	console.log( solution(numArr) )
})
