// 후위식 연산
/**
 * input
 * 352 +* 9 -
 * ouput
 * 12
 */
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const solution = (str) => {
		let answer
		let stack = []
		for(let x of str)
		{
			if(!isNaN( x )) stack.push(Number(x))
			else {
				let rt = stack.pop()
				let lt = stack.pop()
				if(x === '+') stack.push(lt + rt)
				if(x === '*') stack.push(lt * rt)
				if(x === '-') stack.push(lt - rt)
				if(x === '/') stack.push(lt / rt)
			}
		}
		answer = stack[0]
		return answer
	}
	console.log(solution(input[0]))
})
