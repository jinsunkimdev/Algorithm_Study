let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const K = Number( input.shift() ) //7
	const arr = input.map((row) => row.split(" ").map(Number))

	let maxHeight = 0
	let maxWidth = 0

	for(const [direction, sum] of arr)
{ 
	if(direction >= 3) maxHeight += sum
	else maxWidth += sum
 }
 	console.log(arr)
	maxWidth /= 2
	maxHeight /= 2

	 let idx
	 for(let i = 0; i < 6; i++)
	 {
	 	if(arr[i][1] === maxWidth || arr[i][1] === maxHeight)
	 	{
	 		let j = i + 1

	 		if(j > 5) j = 0
	 		if(arr[j][1] === maxHeight || arr[j][1] === maxWidth)
			{
				idx = j
				break
			}
		}
	}
	// let minWidth = idx + 2
	// let minHeight = idx + 3
	// if(minWidth > 5) minWidth -= 6
	// if(minHeight > 5) minHeight -= 6
	// minWidth = arr[minWidth][1]
	// minHeight = arr[minHeight][1]

	// console.log(((maxWidth * maxHeight) - (minWidth * minHeight)) * K)
})