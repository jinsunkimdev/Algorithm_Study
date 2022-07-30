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
		let answer
		// for(let i = 0; i < numArr.length; i++)
		// {
		// 	console.log(indexOf)
		// }
		return console.log( arr.indexOf(v,i) )	
		// return answer
	}
	console.log( solution(numArr) )
})
