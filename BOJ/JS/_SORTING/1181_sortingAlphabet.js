let input = []
require('readline').createInterface(process.stdin, process.stdout).on('line', (line) => {
	input.push(line.trim())
}).on('close', () => {
	input.shift()
	Array.from(new Set(input))
	.sort((a, b) => a > b ? 1 : (a < b ? -1 : 0) )
	.sort((a, b) => a.length - b.length)
	.forEach(i => console.log(i))
})