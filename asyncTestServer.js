const express = require('express');
const app = express();
const server = app.listen(8000);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log(socket);
    console.log('Connection established');
    socket.emit('connected');

    socket.on('genericEvent', () => {
        console.log('Heard:  genericEvent');
        console.log('Emit:  genericResponse');
        socket.emit('genericResponse');
    });

    // socket linked code

});







app.get('/', (req,res) => {
    res.render('index');
});