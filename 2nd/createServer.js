const http = require('http');

http.createServer((req, res) => {
    // 서버에서 보내줄 거
    res.write('<h1> Hello Server Part </h1>')
    res.end('<p> Server Love </p>');
}).listen(8080, () => {
    console.log('8080번에서 서버 대기중!');
});