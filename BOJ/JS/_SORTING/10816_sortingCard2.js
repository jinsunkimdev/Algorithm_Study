// 숫자카드2
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const N = Number(input.shift())
	const secInput = input[0]
					.split(' ')
					.map(str => Number(str))
	const HaveCardMap = new Map()
	const M = input[1]
	const forthInput = input[2]
						.split(' ')
						.map(str => Number(str))
	const myMap = new Map()
	secInput.forEach(v => {
		if(myMap.has(v)) myMap.set(v, myMap.get(v)+1)
		else myMap.set(v, 1)
	})
	const answer = []
	forthInput.forEach(v => answer.push(myMap.get(v) || 0))
	console.log(answer.join(" "))	
})
