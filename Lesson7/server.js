const http = require('http')
let requestsCount = 0;

const server = http.createServer((request,response)=>{

    requestsCount++;
    switch (request.url){
        case '/students':
            response.write('baobab');
            break
        default:
            response.write('page not found')
    }
    if(request.url === '/favicon.ico'){
        requestsCount--;
    }
    response.write(' '+ requestsCount)
    response.end()


})

server.listen(3000)