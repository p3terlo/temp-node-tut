const {readFileSync, writeFileSync, read} = require('fs')

console.log('start')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
result = first + ' ' + second

writeFileSync(
    './content/third.txt', 
    `Here is the result: ${result}`,
    {flag: 'a'}, // Add flag to append. Default behavior without flag overwrites file
)
const third = readFileSync('./content/third.txt', 'utf8')
console.log('done with this task')

// Problem with synchronous behavior is the above task must finish before moving on to the next
// In real world situation, this could be stuck for a long time
console.log('starting next task')