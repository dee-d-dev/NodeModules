const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.write('server opened')
        res.end()
    } else{
        res.write('this is not the landing page')
        res.end()
    }
})
server.listen('3000')