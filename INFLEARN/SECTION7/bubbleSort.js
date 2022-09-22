// 버블 정렬
/**
 * input
 * 6
 * output
 * 13 5 11 7 23 15
 */
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
}).on('close', () => {
	let nArr = input[1].split(' ').map(x => +x)
	const solution = (arr) => {
		let answer = arr
		for (let i = 0; i < answer.length - 1; i++) {
			for (let j = 0; j < answer.length - i - 1; j++) {
				if (answer[j] > answer[j + 1]) {
					[answer[j], answer[j + 1]] = [answer[j + 1], answer[j]]
				}
			}
		}
		return answer
	}
	console.log( solution(nArr).join(' ') )
})