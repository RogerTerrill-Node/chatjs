const app = require('http').createServer(response);
const fs = require('fs');

app.listen(3000);
console.log('App running...');

function response(request, response) {
    response.writeHead(200);
    response.end('Soon enough, this will be a private chatroom for us!');
}
