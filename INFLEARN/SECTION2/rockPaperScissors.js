// 가위바위보
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const N = input.shift()
	const aArr = input[0].split(' ').map(Number)
	const bArr = input[1].split(' ').map(Number)
	const solution = (N, a, b) => {
		let answer = []
		for(let i = 0; i < N; i++)
		{
			if(a[i] == b[i]) answer.push('D')
			if(a[i] > b[i] && a[i] - b[i] == 1) answer.push('A') 
			if(a[i] > b[i] && a[i] - b[i] == 2) answer.push('B') 
			if(b[i] > a[i] && b[i] - a[i] == 1) answer.push('B') 
			if(b[i] > a[i] && b[i] - a[i] == 2) answer.push('A') 
		}
		return answer
	}
	console.log( solution(N, aArr, bArr) )
})
