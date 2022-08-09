// 連続部部分例
/**
 input
 8 6
 1 2 1 3 1 1 1 2
 output
 3
 */
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const solution = (input) => {
		const [N, M] = input.shift().split(' ').map(Number)
		let nArr = input.shift().split(' ').map(Number)
		let answer = []
		let p1 = p2 = 0
		while(p1 < nArr.length)
		{
			if(nArr[p1] + nArr[p2] !== M)
			{
				p2++
			}
			if(nArr[p1] + nArr[p2] === M)
			{
				answer.push(nArr[p1] + nArr[p2])
				p1++
			}
		}
		return answer
	}
	console.log( solution(input) )
})
