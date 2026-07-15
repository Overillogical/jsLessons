const http = require('http')
const users = [
    {id: 1, name: "Alice", age: 25},
    {id: 2, name: "Bob", age: 30},
    {id: 3, name: "Charlie", age: 22}
];
let hello = 0;
let about = 0;
let usrs = 0;


const server = http.createServer((request, response) => {

    if (request.url !== '/favicon.ico') console.log(`${request.method} ${request.url} at ${new Date().toISOString()}`)
    if (request.url.startsWith('/users') && (request.url.split('/').length > 2)) {
        let found = false;
        let numberOfUser = +request.url.split('/').at(-1);
        for (let user of users) {
            if (user.id === numberOfUser) {
                found = true;
                usrs++;
                console.log(numberOfUser)
                response.write(JSON.stringify(user))
                break;
            }
        }
        if (!found) {
            response.write('User not found!')
        }
        response.end()
        return
    }

    switch (request.url) {
        // case '/favicon.ico' :
        //     response.end();
        //     break;
        case '/hello' :
            hello++;
            response.end('Hello from my server!')
            break;
        case '/time':
            const now = new Date();
            response.end(`${now.getHours()}:${now.getMinutes()}`)
            break;
        case '/about':
            about++;
            response.end('My name is Alex, I study back-end');
            break;
        case '/users':
            usrs++;
            response.end(JSON.stringify(users))
            break;
        // case request.url.startsWith('/users')&&(request.url.split('/').length>2):
        //     console.log(request.url.split('/'))
        //     console.log('!!!')
        //     response.end()
        //     break;
        case '/stats':
            const rq = {
                totalRequests: hello + usrs + about,
                "routes": {
                    '/hello': hello,
                    '/users': usrs,
                    '/about': about
                }
            }
            response.end(JSON.stringify(rq))
            break;
        default:
            // response.statusCode(404)
            response.end('error , page not found')
    }
})

server.listen(4000)