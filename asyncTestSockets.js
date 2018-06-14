module.exports = (io) => {

    console.log('io listening');

    io.on('connection', (socket) => {
        console.log(socket);
        console.log('Connection established');
        socket.emit('connected');
        socket.broadcast('new');

        socket.on('genericEvent', () => {
            console.log('Heard:  genericEvent');
            console.log('Emit:  genericResponse');
            socket.emit('genericResponse');
        });
        // socket linked code

    });

}