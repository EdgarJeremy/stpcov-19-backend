import socketio from 'socket.io';
import { isObject } from 'lodash';

const rootHandler: (socket: socketio.Socket, io: socketio.Server) => void = (socket: socketio.Socket, io: socketio.Server): void => {
    socket.on('data', (data) => {
        const s = data.split(',');
        io.sockets.emit('update', {
            temp: s[0],
            distance: s[1]
        });
        console.log(data);
    });
};

export default rootHandler;
