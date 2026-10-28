//STEP 1: LOAD THE PACKAGES
const express = require('express');
const http = require('http');
const socketio = require('socket.io');

//STEP 2: CREATE THE APP AND THE SERVER
const app = express();
const server = http.createServer(app);
const io = new socketio.Server(server);

//STEP 3: SEND THE FILES IN THE PUBLIC FOLDER
app.use(express.static('public'));

//STEP 4: THE SHARED COUNT
let count=0;

//STEP 5: HANDLE TAB CONNECTIONS
io.on ("connection", function (socket) {
    console.log("A tab connected: " + socket.id);

    socket.emit ("count", count);

    socket.on ("add", function () {
        count = count + 1
        io.emit ("count", count);
}); 
});

//STEP 5: START LISTENING
const PORT = process.env.PORT ||  3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
