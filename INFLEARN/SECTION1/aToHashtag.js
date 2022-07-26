// A를 #으로
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	let inputStr = input.shift()
	const solution = (inputStr) => {
		// SOLUTION 1
		// let strArr = inputStr.split('')
		// for(let i = 0; i < inputStr.length; i++)
		// 	{ 
		// 		if( inputStr.charCodeAt(i) === 65 ) strArr.splice(i, 1, '#')
		// 	}
		// return strArr.join('')

		// SOLUTION 2
		// let answer = ""
		// for(let x of inputStr)
		// {
		// 	if(x === 'A') answer += "#"
		// 	else answer += x
		// }
		// return answer

		// SOLUTION 3
		// 문자열은 주소 참조가 안됨 값만 가져옴 배열이 주소 참조
		   let answer = inputStr
		   answer = inputStr.replace(/A/g, '#')
		   return answer
	}
	console.log( solution(inputStr) )
})