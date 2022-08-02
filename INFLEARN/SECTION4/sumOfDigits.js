// 자릿수의 합
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const N = Number( input[0] )
	const nArr = input[1].split(' ').map(Number)
	const solution = (arr) => {
		let answer
		let tmp = []
		// get digit
		let dArr = []
		for(let i = 0; i < arr.length; i++)
		{
				dArr.push( arr[i].toString().length - 1 )
		}
		// 
		for(let i = 0; i < nArr.length; i++)
		{
			let cnt = 0
			for(let j = dArr[i]; j > 0; j--)
			{
				cnt += Math.floor( arr[i] % (  10 ** nArr[i]  ) ) 
			}
			tmp.push(cnt)
		}
		return tmp
	}
	console.log( solution(nArr) )
})