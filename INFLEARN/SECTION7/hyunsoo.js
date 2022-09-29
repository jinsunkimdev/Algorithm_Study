// 장난꾸러기 현수
/**
▣ 입력예제 1
9
120 125 152 130 135 135 143 127 160
▣ 출력예제 1 38
▣ 입력예제 2
6
120 130 150 150 130 150
▣ 출력예제 2 35
 */
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
}).on('close', () => {
	let H = input[1].split(' ').map(x => Number(x))
	const solution = (arr) => {
		let answer = []
		let arr2 = [ ...arr ]
		// for(let i = 0; i < arr.length; i++)	
		// {
		// 	let idx = i
		// 	for(let j = i + 1; j < arr.length; j++)
		// 	{
		// 		if(arr[j] < arr[idx]) idx = j 
		// 	}
		// 	[arr[i], arr[idx]] = [arr[idx], arr[i]]
		// }
		for(let i = 0; i < arr.length; i++)
		{
			let tmp = arr[i]
			let j = i - 1
			while(j >= 0 && arr[j] > tmp)
			{
				arr[j+1] = arr[j]
				j - 1
			}
			arr[j+1] = tmp
		}
		for(let i = 0; i < arr.length; i++)
		{
			if(arr[i] !== arr2[i]) answer.push(arr[i])
		}
		console.log(arr)
		return answer.join(" ")
	}
	console.log(solution(H))
})