const app = require('http').createServer(response);
const fs = require('fs');
const io = require('socket.io')(app);

app.listen(3303);
console.log('App running...');

function response(request, response) {
    let file = '';
    if (request.url == '/') {
        file = __dirname + '/index.html';
    } else {
        file = __dirname + request.url;
    }

    fs.readFile(file, function(error, data) {
        if (error) {
            response.writeHead(404);
            return response.end('Page or file not found');
        }

        response.writeHead(200);
        response.end(data);
    });
}

io.on('connection', function(socket) {
    socket.on('send message', function(sent_msg, callback) {
        sent_msg = 'Message:  ' + sent_msg;
        io.sockets.emit('update messages', sent_msg);
        callback();
    });
});
