let input = []
require('readline').createInterface(process.stdin, process.stdout).on('line', (line) => {
	input.push(line.trim())
}).on('close', () => {
	let answer = ''
	input.slice(1).reduce((acc, cur) => {
		const [age, name] =  cur.split(' ')
		acc.push([+age, name])
		return acc
	}, [])
	.sort((a, b) => a[0] - b[0] || a[0])
	.forEach(i => ( answer += `${i[0]} ${i[1]}\n` ))
	console.log(answer)
})