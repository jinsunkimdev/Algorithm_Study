// 두 배열 합치기
/**
input
3
1 3 5
5
2 3 6 7 9 
ouput
1 2 3 3 5 6 7 9
 */
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
		const N = Number( input.shift() )
		let nArr = input.shift().split(' ').map(Number)
		const M = Number(input.shift())
		let mArr = input.shift().split(' ').map(Number)
	const solution = (n, m) => {
		let answer = []
		n.sort((a,b) => a - b)
		m.sort((a,b) => a - b)
		let p1 = p2 = 0
		while(p1 < n.length && p2 < m.length)
		{
			if(n[p1] <= m[p2]) answer.push(n[p1++])
			else answer.push(m[p2++])
		}
		console.log(p1, p2)
		while(p1 < n.length) answer.push(n[p1++])
		while(p2 < m.length) answer.push(m[p2++])
		return answer
	}
	console.log( solution(nArr, mArr) )
})