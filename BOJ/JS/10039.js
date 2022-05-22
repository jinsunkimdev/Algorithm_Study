"use strict";
let input = []
require('readline')
    .createInterface(process.stdin, process.stdout)
    .on('line', (line) => {
      input = line
              .trim()
              .split(" ")
              .map((num) => parseInt(num))
    })
    .on('close', () => {
      const N = input.shift()
      const M = input.shift()
      console.log(`N=${N}`)
      console.log(`M=${M}`)
    })