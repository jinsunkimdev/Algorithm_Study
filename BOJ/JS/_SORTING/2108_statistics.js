const input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', function(line) {
	input.push( Number(line.trim()) )	
}).on('close', function() {
	let answer = ""
	const N = input.shift()
	input.sort((a, b) => a - b) 
	let arithmeticMean = 0 
	// 산술평균
		for(let i = 0; i < N; i++)
		{
			arithmeticMean += input[i]
		}
		arithmeticMean = Math.round( arithmeticMean / N )  
		if(arithmeticMean === -0)
		{
			arithmeticMean = 0
		}
		answer += `${arithmeticMean}\n`
		/*
		*산술평균 더 좋은 답 
		answer += `${Math.round(input.reduce((a, b) => a + b, 0) / N)}\n`
		*/

	// 중앙값
		answer += `${input[Math.floor(N / 2)]}\n`

	// 최빈값
		const map = new Map()
		let max = 1
		for(let number of input)
		{
			// map에 중복되는 값이 있을 경우
			if(map.has(number))
			{
				max = Math.max(max, map.get(number) + 1)
				map.set(number, map.get(number) + 1)
			}else map.set(number, 1)
		}
		const maxArr = []
		for(let [key, val] of map)
		{
			if(val === max) maxArr.push(key)
		}
		answer += maxArr.length === 1 ? `${maxArr[0]}\n` : `${maxArr[1]}\n`

	// 범위
	answer += `${input[N - 1] - input[0]}\n`
	console.log(answer)
})