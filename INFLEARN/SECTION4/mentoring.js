// 멘토링
/**
 * input
 * 4 3
3 4 1 2
4 3 2 1
3 1 4 2
 */
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const [N, M] = input.shift().split(' ').map(v => +v) 
	let answer = 0
	let inputArr = []
	// input to aArr
	for(let x of input)	
	{
		inputArr.push( x.split(' ').map(Number) )
	}
	let aArr = Array.from({length: N + 1}, v => v  = [])
	for(let i = 0; i < inputArr.length; i++)
	{
		for(let j = 0; j < inputArr[i].length; j++)
		{
			aArr[( inputArr[i][j] )].push(j)
		}
	}
	aArr.shift()
	// 前からsearch
	for(let i = 0; i < aArr.length - 1; i++)
	{
		for(let j = i+1 ; j <= aArr.length - 1; j++)
		{
			let cnt = 0
			for(let k = 0; k < M; k++)
			{
				if(aArr[i][k] > aArr[j][k]) break
				else cnt =+ 1
			}
			if(cnt === M) answer++
		}
	}
	// 後ろからsearch
	for(let i = aArr.length - 1; i >= 1; i--)
	{
		for(let j = i - 1; j >= 0; j--)
		{
			let cnt1 = 0
			for(let k = 0; k < M; k++)
			{
				if(aArr[i][k] > aArr[j][k]) break
				else cnt1 = cnt1 + 1
			}
			if(cnt1 === M) answer = answer + 1
		}
	}
	console.log(answer)
})
