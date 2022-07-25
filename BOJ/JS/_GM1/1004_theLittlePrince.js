let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const T = input.shift()
	// Departure(x1, y1) Destination(x2, y2)
	const [x1, y1, x2, y2] = input[0].split(' ').map(Number) 
	// The number of planets
	const n = input[1]
	// Midpoint(cx, cy) Radius r
	const [cx, cy, r] = input[2]
})// end