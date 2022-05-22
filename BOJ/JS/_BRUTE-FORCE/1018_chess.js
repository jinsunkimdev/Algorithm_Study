// 첫째 줄에 행과 열 숫자 입력 받고 다음 줄부터 체스판 입력받음.
let [M_N, ...board] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
// 첫째 줄 입력 받은 값을 M, N에 각각 넣어준다.
const [M, N] = M_N.split(' ').map(v => +v)
// 비교해야 하는 체스판 
const blackFirst = [
   'BWBWBWBW',
   'WBWBWBWB',
   'BWBWBWBW',
   'WBWBWBWB',
   'BWBWBWBW',
   'WBWBWBWB',
   'BWBWBWBW',
   'WBWBWBWB',
]
const whiteFirst = [
   'WBWBWBWB',
   'BWBWBWBW',
   'WBWBWBWB',
   'BWBWBWBW',
   'WBWBWBWB',
   'BWBWBWBW',
   'WBWBWBWB',
   'BWBWBWBW',
]
// result
let result = []
// 값을 구하는 함수 
const getCount = (row, col, first) =>
{
   let count = 0

   for(let i = row; i < row + 8; i++)
   {
      for(let j = col; j < col + 8; j++)
      {
         if(board[i][j] !== first[i - row][j - col])
         {
            count += 1
         }
      }
   }
   return count
}
// main
for(let i = 0; i + 7 < M; i++)
{
   for(let j = 0; j + 7 < N; j++)
   {
      result.push(getCount(i, j, blackFirst))
      result.push(getCount(i, j, whiteFirst))
   }
}
// answer
console.log(Math.min(...result))