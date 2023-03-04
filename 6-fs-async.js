const {readFile, writeFile, write} = require('fs')

console.log('start')

readFile('./content/first.txt', 'utf8', (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = res;

    readFile('./content/second.txt', 'utf8', (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = res;

        data = first + ' ' + second;
        writeFile('./content/third.txt', data, (err, res) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log('done with this task'); // Expect undefined res, we are just writing to third.txt
        })
    })
})

console.log('starting next task')