// 보이는 학생
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const N = Number( input.shift() )
	const sArr = input[0].split(' ').map(Number)
	const solution = (n, sArr) => {
		let answer = 1, tmp = sArr[0]
		for(let i = 0; i < n - 1; i++)
		{
			if(sArr[i + 1] > tmp) 
			{
				answer++
				tmp = sArr[i + 1]
			}
		}
		return answer
	}
	console.log( solution(N, sArr) )
})