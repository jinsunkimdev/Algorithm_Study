let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', function(line) {
	input.push(line.trim())	
}).on('close', function () {
	const [N, ...arrN] = input.map((num) => Number(num))
	let maxN = Math.max.apply(null, arrN)
	let arrangeN = new Array(maxN)
	arrangeN.fill(0)
	let answer = ''
	for(let i = 0; i < N; i++)
	{
		arrangeN[arrN[i] - 1]++
	}

	for(let i = 0; i < arrangeN.length; i++)
	{
		if(arrangeN[i] !== 0)
		{
			for(let j = 0; j < arrangeN[i]; j++)
			{
				answer += (i + 1) + '\n'
			}
		}
	}
	console.log(answer)
})