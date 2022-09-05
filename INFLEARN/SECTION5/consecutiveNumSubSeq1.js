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
	const [N, M] = input.shift().split(' ').map(Number)
	let nArr = input.shift().split(' ').map(Number)
	const solution = (m, arr) => {
		let answer = 0
		let lt = rt = sum = 0
		for(let rt = 0; rt < arr.length; rt++)
		{
			sum+=arr[rt]
			if(sum === m) answer++
			while(sum >= m)
			{
				sum -= arr[lt++]
				if(sum === m) answer++
			}
		}
		return answer
	}
	console.log( solution(M, nArr) )
})
