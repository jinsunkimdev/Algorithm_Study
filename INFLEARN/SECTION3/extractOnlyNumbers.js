// 숫자만 추출
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const solution = (str) => {
		let answer
		let num = str.replace(/[^0-9]/g, "")
		num = +num
		return answer = num
		// let answer = 0
		// for(let x of str)
		// {
		// 	if(!isNaN(x)) answer = answer * 10 + Number(x)
		// }
		// return answer
	}
	console.log( solution(input[0]) )
})
