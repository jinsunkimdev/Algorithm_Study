let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
}).on('close', () => {
	const strNumber = input.shift()
	const [N, M] = strNumber.split(' ').map(str => Number(str))
	let answer = 0
	let S = input.slice(0, N)
	const checkStr = input.slice(N, N+M)
	const obj = {}
	S.forEach(item => obj[item] = true)
	checkStr.forEach(item => { if(obj[item]) answer += 1 })
	console.log(answer)
})