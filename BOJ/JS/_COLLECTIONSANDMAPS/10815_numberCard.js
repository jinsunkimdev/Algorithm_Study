let input = []
require('readline').createInterface(process.stdin, process.stdout).on('line', (line) => {
	input.push(line.trim())
}).on('close', () => {
	let answer = []
	let answerObj = {}
	//숫자 카드 개수N, 상근이 가지고 있는 카드 배열cardArr
	//비교할 카드 개수M, 비교할 카드 배열exArr
	let [N, cardArr, M, exArr] = input
	let testArr = exArr
	cardArr = cardArr.split(' ').map(i => Number(i)).sort((a, b) => a - b)
	testArr.split(' ').map(i => Number(i)).sort((a, b) => a - b)
	.forEach(x => { 
		answerObj[x] = 0
		for(let i = 0; i < N; i++)
		{
			if( x === cardArr[i]){
				answerObj[x] = 1
			}
		}
	})
	exArr.split(' ').map(i => Number(i)).forEach(x => answer.push( answerObj[x]))
	console.log(answer.join(' '))
})