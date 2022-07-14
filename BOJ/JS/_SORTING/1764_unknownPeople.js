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
	const nhSet = new Set()
	neverHeard.forEach(v => nhSet.add(v))
	const neverSeen = nameArr.slice(N + 1)
	const nsSet = new Set()
	neverSeen.forEach(v => nsSet.add(v))
	let count = 0
	let answer = []
	nhSet.forEach(v =>{
		if(nsSet.has(v)){
			count++
			answer.push(v)
		}
	})
	console.log(count)
	console.log(answer.join("\n"))
})