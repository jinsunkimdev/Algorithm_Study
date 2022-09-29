// 좌표 정렬
/**
 * input
 * 5
2 7
1 3
1 2 
2 5 
3 6
 * output
1 2
1 3
2 5
2 7
3 6
 */
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
}).on('close', () => {
	const N = Number( input.shift() )
	let x = []
	let y = []
	for(let n of input)
	{
		let tmp = n.split(' ').map(x => +x)
		x.push(tmp[0])
		y.push(tmp[1])
	}
	const solution = (x, y) => {
// 		let answer = []
// 		let tmp = []
// 		for(let i = 0; i < x.length; i++)
// 		{
// 			tmp.push([x[i], y[i]])
// 		}
// 		tmp.sort((a, b) => {
// 			if(a[0] === b[0]) return a[1] - b[1]
// 			else return a[0] - b[0]
// 		})
// 		for(let i = 0; i < tmp.length; i++)
// 		{
// 			answer.push(tmp[i][0], tmp[i][1])
// 		}
// 		return answer
// 	}
// 	console.log(solution(x, y).join(' '))
// })
		let answer = []
		for(let i = 0; i < x.length; i++)
		{
			let tmp = x[i]
			let tmp2 = y[i]
			let j = i - 1
			let j2 = i - 1
			while(x[j] > tmp && j >= 0)
			{
				x[j + 1] = x[j]
				j = j - 1
			}
			x[j + 1] = tmp
			while(y[j2] > tmp2 && j2 >= 0)
			{
				y[j2 + 1] = y[j2]
				j2 = j2 - 1
			}
			y[j2 + 1] = tmp2
		}
		for(let i = 0; i < x.length; i++)
		{
			answer.push(x[i] + ' ' + y[i])
		}
		return answer
	}
	console.log(solution(x, y))
})