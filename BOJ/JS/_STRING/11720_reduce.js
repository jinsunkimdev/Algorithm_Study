'use strict';
const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let answer = input[1].split('').reduce((acc, inputNum) => acc + Number(inputNum), 0);
console.log(answer);