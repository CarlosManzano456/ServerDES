const http = require('http');
const server = http.createServer();

const io = require('socket.io')(server, {
    cors: { origin: '*' }
});

io.on("connection", (socket) => {
    console.log(socket.id);
    socket.on("chat_message", (body) => {
        socket.broadcast.emit("chat_message", {
            body,
            from: socket.id,
        });
    });
});

server.listen(3000);
