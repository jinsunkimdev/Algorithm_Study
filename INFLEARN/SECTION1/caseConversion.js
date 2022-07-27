// 대소문자 변환
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const solution = (str) => {
		let answer = ""
		for(let x of str)
		{
			if(x.charCodeAt() >= 65 && x.charCodeAt() <= 90) answer += x.toLowerCase()
			else answer += x.toUpperCase()
		}
		return answer
	}
	console.log( solution(input[0]) )
})