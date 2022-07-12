// 듣보잡
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
}).on('close', () => {
	// 듣도 못한 사람N, 보도 못한 사람N
	const [N, M] = input.shift().split(' ').map(v => +v)
	const nameArr = input
	const neverHeard = nameArr.slice(0, N) 
	const neverSeen = nameArr.slice(N + 1)
	const matchMap = new Map()
	const answer = []
	neverHeard.forEach(v => {
		matchMap.set(v, 1)
	})
	neverSeen.forEach(v => {
		if(matchMap.has(v)) 
		{
			answer.push(v)
		}
	})
	answer.sort((a, b) => a - b)
	console.log(answer.length)
	console.log(answer.join("\n"))
})