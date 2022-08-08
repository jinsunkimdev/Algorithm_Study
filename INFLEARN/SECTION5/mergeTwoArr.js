// 두 배열 합치기
/**
input
3
1 3 5
5
2 3 6 7 9 
ouput
1 2 3 3 5 6 7 9
 */
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const solution = (input) => {
		let answer
		const N = Number( input.shift() )
		let nArr = input.shift().split(' ').map(Number)
		const M = Number(input.shift())
		let mArr = input.shift().split(' ').map(Number)
		let tmpArr = []
		let p1 = p2 = 0
		while(p1 < N && p2 < M)
		{
			if(nArr[p1] <= mArr[p2]) tmpArr.push(nArr[p1++])
			else tmpArr.push(mArr[p2++])
		}
		while(p1 < N) tmpArr.push(nArr[p1++])
		while(p2 < M) tmpArr.push(mArr[p2++])
		console.log(tmpArr)
		// const arr1 = nArr.concat(mArr)
		// return answer = arr1.sort((a, b) => a - b)
	}
	console.log( solution(input) )
})