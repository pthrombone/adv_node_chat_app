import * as path from "path";
import * as http from "http";
import * as socketIO from "socket.io";
import * as express from 'express';

const publicPath = path.join(__dirname, '../public');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const port = process.env.PORT ||  3000;

app.use(express.static(publicPath));

io.on('connection', (socket)=> {
    console.log('New user connected');

    socket.on('disconnect', ()=> {
        console.log('client was disconnected');
    });

    // socket.emit("newEmail",{
    //     from: "joe Blow",
    //     text: "Whazzz uppppp???",
    //     createdAt : Date.now()
    // });

    // socket.on('createEmail', (newEmail)=>{
    //     console.log('createEmail:', newEmail);
    // });
    socket.on('createMessage', (message)=> {
        console.log("Incomming message: ", message);
        io.emit('newMessage', {
            from : message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });
    })
});


server.listen(port, ()=> {
    console.log(`Server is up on port ${port}`);
});

// console.log(__dirname + '../public');
// console.log(publicPath);