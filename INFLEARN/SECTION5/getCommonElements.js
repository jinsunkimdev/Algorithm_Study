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
		const N = Number( input.shift() )
		let nArr = input.shift().split(' ').map(Number)
		const M = Number( input.shift() )
		let mArr = input.shift().split(' ').map(Number)
	const solution = (n, m) => {
		let answer = []
		n.sort((a, b) => a - b)
		m.sort((a, b) => a - b)
		let p1 = p2 = 0
		while(p1 < n.length && p2 < m.length)
		{
			if(n[p1] === m[p2]) answer.push(m[p2++])
			else p1++
			console.log(p1, p2)
		}
		return answer
	}
	console.log( solution(nArr, mArr) )
})