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
		let answer = 0
		let lt = sum = 0
		for(let rt = 0; rt < nArr.length; rt++)
		{
			sum += nArr[rt]
			if(sum === M) answer++
			while(sum >= M)
			{
				sum -= nArr[lt++]
				if(sum === M) answer++
			}
		}
		return answer
	}
	console.log( solution(input) )
})
