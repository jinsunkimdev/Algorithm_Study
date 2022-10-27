/* 결혼식
▣ 입력예제 1 5
14 18
12 15
15 20 
20 30 
5 14
▣ 출력예제 1 
 2
 input
 5
 14 18
 12 15
 15 20
 20 30
 5  14 
 * output
  2
 */
let input = []
require('readline').createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    input.push(line.trim())
  }).on('close', () => {
    const N = input.shift()
    let nArr = []
    for (let x of input) {
      nArr.push(x.split(' ').map(x => +x))
    }
    const alloCoordinate = (arr) => {
      arr.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1]
        else return a[0] - b[0]
      })
    }
    const solution = (arr) => {
      let answer = []
      alloCoordinate(arr)
      for (let i = 0; i < N; i++) {
        let cnt = 0
        let end = arr[i][1]
        for (let x of arr) {
          if (end > x[0] && end <= x[1]) cnt++
        }
        answer.push(cnt)
      }
      return Math.max(...answer)
    }
    console.log(solution(nArr))
    /*
        const solution = (input) => {
        alloCoordinate(arr) 
      let answer = Number.MIN_SAFE_INTEGER
      let T_line = []
      for(let x of times)
      {
        T_line.push([x[0], 's'])
        T_line.push([x[1], 'e'])
      }
      T_line.sort((a, b) => {
        if(a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt()
        else return a[0] - b[0]
      })
      let cnt = 0
      for(let x of T_line){
        if(x[1] === 's') cnt++
        else cnt--
        answer = Math.max(answer, cnt)
      }
      return answer
      }
      console.log(solution(arr))
     */
  })
