// 가장 긴 문자열
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const solution = (input) => {
		let answer = input[1]
		// let answer, max = Number.MIN_SAFE_INTEGER
		for(let i = 2; i < input[0]; i++)
		{
		if(answer.length <= input[i].length) answer = input[i]
		}
		return answer
	}
	console.log( solution(input) )
})
