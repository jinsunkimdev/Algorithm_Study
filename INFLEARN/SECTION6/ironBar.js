// 쇠막대기
/**
 * input ()(((()())(())()))(())
 * output 17
 * 
 * input (((()(()()))(())()))(()())
 * output 24
 */
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const solution = (str) => {
		let answer = 0
		let stack = []

		for (let i = 0; i < str.length; i++) {
			if (str[i] === '(') {
				stack.push(str[i])
			} else {
				stack.pop()
				if (str[i - 1] === '(') {
					answer += stack.length
				} else {
					answer += 1
				}
			}
		}
		return answer
	}
	console.log(solution(input[0]))
})