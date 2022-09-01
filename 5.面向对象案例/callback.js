const http = require('http')

const abc = http.createServer((req, res) => {
    console.log(2);
    res.end('hello')
})
abc.listen(9090)
console.log('ok');

setTimeout(() => {
    console.log(22);
}, 1000)