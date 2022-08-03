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
		let answer = []
		let sumArr = []
		// get digit
		let dArr = []
		for(let i = 0; i < arr.length; i++)
		{
				dArr.push( arr[i].toString().length - 1 )
		}
		// sum of digits
		for(let i = 0; i < nArr.length; i++)
		{
			let tmp = 0
			for(let j = dArr[i]; j >= 0; j--)
			{
				tmp = nArr[i].toString().split('').reduce((a, b) => a + Number(b),0)
			}
			sumArr.push(tmp)
		}
		const max = Math.max(...sumArr)
		for(let i = 0; i < sumArr.length; i++)
		{
			if(sumArr[i] === max)
			{
				answer.push(nArr[i])
			}
		}
		answer = Math.max(...answer)
		/**
		 * let answer, max = Number.MIN_SAFE_INTEGER
		 * for(let x of arr)
		 * {
		 * let sum = x.toString().split('').reduce((a, b) => a + Number( b ), 0)
		 *		let sum = 0, tmp = x 
				while(tmp)
				{
					sum += (tmp % 10)
					tmp = Math.floor( tmp / 10 )
				}
				if(sum > max)
				{
					max = sum
					answer = x
				}
				else if(sum === max)
				{
					if(x > answer) answer = x
				}
		 * }
		 */

		return answer
	}
	console.log( solution(nArr) )
})