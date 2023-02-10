const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const path = require("path");

const port = process.env.PORT || 3000;

app.use(express.static(__dirname+"/public"));


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"));
})



http.listen(port,()=>console.log(`Listening on port ${port}`));





// socket

io.on("connection", (socket) => {
    console.log("Connected...");

    socket.on("message",(msg)=>{
        socket.broadcast.emit("message",msg);
    })
})

