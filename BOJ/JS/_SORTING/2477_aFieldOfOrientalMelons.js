let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const K = Number( input.shift() )

	let maxHeight = 0
	let maxWidth = 0

	for(const [direction, sum] of input)
{ 
	if(direction >= 3) maxHeight += sum
	else maxWidth += sum
 }

	maxHeight /= 2
	maxWidth /= 2

	let idx
	for(let i = 0; i < 6; i++)
	{
		if(input[i][1] === maxWidth || input[i][1] === maxHeight)
		{
			let j = i + 1

			if(j > 5) j = 0
			if(input[j][1] === maxWidth || input[j][1] === maxHeight)
			{
				idx = j
				break
			}
		}
	}
	let minWidth = idx + 2
	let minHeight = idx + 3
	if(minWidth > 5) minWidth -= 6
	if(minHeight > 5) minHeight -= 6
	minWidth = input[minWidth][1]
	minHeight = input[minHeight][1]

	console.log(((maxWidth * maxHeight) - (minWidth * minHeight)) * K)
})