const http = require('http')

const server = http.createServer((req,res)=>{
     if (req.url === '/'){
        res.end('this is home')
    }   
    else if(req.url === '/about'){
        res.end('this is our short history')
    }
    else {res.end(`<h1>OOPs</h1> 
    <p>we cant find the page</p>
    <a href="/">Back home</a>`)   
    }
})

server.listen(5000)