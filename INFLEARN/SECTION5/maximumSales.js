// 최대 매출
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const [N, K] = input.shift().split(' ').map(Number)
	let nArr = input.shift().split(' ').map(Number)
	const solution = (k, arr) => {
		let answer = 0
		let sum = 0
		let lt = rt = 0
		for(let rt = 0; rt < arr.length; rt++)
		{
			sum += arr[rt]
			if(rt >= k - 1)
			{
				answer = Math.max(answer, sum)
				sum -= arr[lt++]
			}
		}
		return answer
		// let answer, sum = 0
		// for(let i = 0; i < K; i++) sum += arr[i]
		// answer = sum
		// for(let i = k; i < arr.length; i++)
		// {
		// 	sum += (arr[i] - arr[i-k])
		// 	answer = Math.max(answer, sum)
		// }
		// return answer
	}
	console.log( solution(K, nArr))
})