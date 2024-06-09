const express = require('express');
const bodyparser = require('body-parser');
const {Server} = require('socket.io');

const io = new Server();
const app = express();

app.use(bodyparser.json());
io.on('connection', (socket) => {
    console.log('a user connected');

});

app.listen(8000,()=>console.log("http server running at port 8000"));
io.listen(8001);