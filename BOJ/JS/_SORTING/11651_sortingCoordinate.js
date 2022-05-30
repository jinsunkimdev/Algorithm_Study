let input = []
require('readline').createInterface(process.stdin, process.stdout).on('line', (line) => {
	input.push(line.trim())
}).on('close', () => {
	let answer = ''
	input.slice(1).reduce((acc, cur) => {
		const [x, y] = cur.split(' ')
		acc.push( [+x, +y] )
		return acc
	}, [])
	.sort((a, b) => a[1] - b[1] || a[0] - b[0])
	.forEach(sort => (answer += `${sort[0]} ${sort[1]}\n`))
	console.log(answer)
})