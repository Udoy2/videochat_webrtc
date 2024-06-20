const express = require('express');
const bodyparser = require('body-parser');
const {Server} = require('socket.io');

const io = new Server({
    cors: true,
});
const app = express();
const emailToSocketMapping = new Map();
app.use(bodyparser.json());
io.on('connection', (socket) => {
    console.log('new connection');
    socket.on("join-room",(data)=>{
        const {roomId,emailId} = data;
        console.log("User",emailId,"Joined Room",roomId);    
        emailToSocketMapping.set(emailId,socket.id);
        socket.join(roomId);
        socket.emit("joined-room",{roomId});
        socket.broadcast.to(roomId).emit("user-joined",{emailId})
    });

});

app.listen(8000,()=>console.log("http server running at port 8000"));
io.listen(8001);