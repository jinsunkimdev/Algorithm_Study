'use strict'
let input = []
require('readline').createInterface(process.stdin, process.stdout).on('line', (line) => {
	input.push(line.trim())
}).on('close', () => {
	function solution(input){
	let [n, x] = input
	x = x.split(' ').map(i => Number(i))
	const answer = []
	const coordSet = Array.from(new Set([...x])).sort((a, b) => a - b)
	const coordObject = {}
	coordSet.forEach((item, idx) => coordObject[item] = idx)
	for(let i = 0; i < x.length; i++)
	{
		answer.push(coordObject[x[i]])
	}
	return answer.join(' ')
}
	console.log( solution(input) )
	// let inputArr = Array.from(input.split(' ').map(i => Number(i)))
	// let coordSet = Array.from( input[0].split(' ').map(i => Number(i))
	// .sort((a, b) => a - b) )
	// let coordSetArr = Array.from(new Set( coordSet ))
	// let setArr = new Array(coordSetArr.length).fill(0)
	// coordSetArr.forEach(x => {
	// 	for(let i = 0; i < setArr.length; i++)
	// 	{
	// 		if(coordSet[i] < x && coordSet[i] !== x)
	// 		{
	// 			setArr[i] += 1
	// 		}
	// 	}
	// })
	// let testArr = new Map()
	// setArr.reverse()
	// for(let i = 0; i < setArr.length; i++)
	// {
	// 	testArr.set(coordSetArr[i], setArr[i])
	// }
	// console.log(inputArr)
	// console.log(inputArr.map(i => testArr.get(i)).join(' '))
})