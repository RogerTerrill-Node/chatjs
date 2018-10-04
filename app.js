const app = require('http').createServer(response);
const fs = require('fs');

app.listen(3000);
console.log('App running...');

function response(request, response) {
    fs.readFile(__dirname + '/index.html', function(error, data) {
        if (error) {
            response.writeHead(500);
            return response.end('Failed to laod file index.html');
        }

        response.writeHead(200);
        response.end(data);
    });
}
