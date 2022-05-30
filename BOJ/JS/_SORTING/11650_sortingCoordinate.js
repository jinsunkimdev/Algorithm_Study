let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
}).on('close', () => {
	const sorted = input.slice(1).reduce((acc, cur) => {
		const [x, y] = cur.split(' ')
		acc.push([+x, +y])
		return acc
	}, []).sort((a, b) => a[0] - b[0] || a[1] - b[1])
	console.log(sorted)
	// const N = input.shift()
	// const location = input.map(v=>v.split(' ').map(x => +x))
	// const answer = location.sort((a, b) => {
	// 	if(a[0] > b[0])
	// 	{
	// 		return 1
	// 	}
	// 	if(a[0] < b[0])
	// 	{
	// 		return -1
	// 	}
	// 	else return a[1] - b[1]
	// })
	// console.log(answer.map(v=>v.join(' ')).join('\n'))
})
