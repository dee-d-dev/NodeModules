const http = require('http')
const fs = require('fs')
http.createServer((req, res)=>{
    const readStream = fs.createReadStream('./static/img.jpg')
    res.writeHead(200,{'content-type': 'image/jpg'})
    readStream.pipe(res)
}).listen(3000) 