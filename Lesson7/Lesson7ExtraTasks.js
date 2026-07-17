const http = require('http');
const users = [{id: 1, name: 'alex', age: 23}, {id: 2, name: 'michael', age: 27}]

const server = http.createServer((request, response) => {
    // if (request.url.startsWith('/greet/')) {
    //     const getName = request.url.split('/').at(-1);
    //     if (getName.length > 0) response.end(`Hello, ${getName}!`)
    //     return
    // }
    const startsWithGreet = request.url.startsWith('/greet?')
    if (startsWithGreet && request.url.split('name').length > 1) {
        const getName = request.url.split('name=').at(-1);
        if (getName.length > 0) response.end(`Hello, ${getName}!`)
        return
    }
    switch (request.url) {
        case '/hello':
            if (request.method === 'GET') {
                response.end("Hello from my server!")
            } else {
                response.statusCode = 405;
                response.end("Method not allowed")
            }
            break;
        case '/greet':
            response.end('Hello stranger!')
            break;
        case '/users/stats':
            let avgAge = 0;
            if (users.length > 0) {
                users.forEach(element => avgAge += element.age)
                avgAge = avgAge / users.length
            }
            const usersStat = {'count': users.length, 'averageAge': avgAge}
            response.end(JSON.stringify(usersStat))
            break;
        default:
            response.statusCode = 404
            response.end('Page not found')
    }
})

server.listen(3000)