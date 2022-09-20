// 교육과정 설계
/**
 * input
 * CBA
 * CBDAGE
 * 
 * output
 * YES
 */
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const subject = input.shift()
	let hyunsoo = input.shift()
	const solution = (sub, stu) => {
		let answer
		let queue = sub.split('')
		for (let x of stu) {
			if (x === queue[0]) queue.shift()
		}
		if (queue.length === 0) answer = 'YES'
		else answer = 'NO'
		return answer

		// let queue = []
		// for(let x of sub)
		// {
		// 	for(let i = 0; i < stu.length; i++)
		// 	{
		// 		if(x === stu[i]) 
		// 		{
		// 			queue.push(stu[i])
		// 			break
		// 		}
		// 	}
		// 	if(queue.length === 0) 
		// 	{ 
		// 		answer = "NO"
		// 		break
		// 	}
		// }
		// if(JSON.stringify(queue.join('')) == JSON.stringify(sub)) answer = "YES"
		// console.log(queue, sub)
		return answer
	}
	console.log( solution(subject, hyunsoo) )
})