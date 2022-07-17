// 서로 다른 부분 문자열의 개수
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', line => {
	input.push(line.trim())
})
.on('close', () => {
	// 주어진 문자열 S
	const S = input.shift()
	const sSet = new Set()
	for(let i = 0; i < S.length; i++)
	{
		let sArr = ""
		for(let j = i; j < S.length; j++)
		{
			sArr += S.slice(j, j+1)
			sSet.add(sArr)
		}
	}
	console.log(sSet.size)
})