// 점수계산
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const N = input.shift()
	const scoreArr = input[0].split(' ').map(Number)
	const solution = ( sArr) => {
		let answer = 0
		let tmp = 0
		for(let i = 0; i < sArr.length; i++)
		{
			if(sArr[i] === 1) 
			{
				tmp += 1
			}
			if(sArr[i] === 0)
			{
				tmp = 0
			}
			answer += tmp
		}
		return answer
	}
	console.log( solution(scoreArr) )
})
