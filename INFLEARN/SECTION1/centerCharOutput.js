// 가운데 문자 출력
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const solution = (str) => {
		let answer = ""
		let mid = Math.floor(str.length / 2)
		if(str.length % 2 == 1) answer = str.substr(mid, 1)
		else answer = s.substr(mid - 1, 2)
		return answer
	}
	console.log( solution(input[0]) )
})
