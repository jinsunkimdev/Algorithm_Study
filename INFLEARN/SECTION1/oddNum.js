let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	let inputArr = input.shift().split(' ').map(Number)
	let oddSum = 0
	let oddArr = [] 
	let minVal = Number.MAX_SAFE_INTEGER
	const solution = (inputArr) => {
		// for(let i = 0; i < inputArr.length; i++)
		// {
		// 	if( inputArr[i] % 2 !== 0) { 
		// 		oddSum += inputArr[i] 
		// 		oddArr.push(inputArr[i])
		// 	} 
		// }
		for(let x of inputArr)
		{
			if(x % 2 === 1)
			{
				oddSum += x
				if(x < minVal) 
				{ 
					oddArr.push(x)
				}
			}
		}
		minVal = Math.min(...oddArr)
		// 배열을 인자로 넣으면 NaN이 출력, 전개연산자로 인자를 넘겨줘야함 ...arrName
		// 또는 apply를 사용, Math.min.apply(null, arr)첫번째 인자는 this에 넘겨줄 객체 인자이므로 null, 두번째 인자에 배열을 넘겨줘야함
		return oddSum+'\n'+minVal
	}
	console.log( solution(inputArr) )
})