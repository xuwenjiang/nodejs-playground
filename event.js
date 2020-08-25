const EventEmitter = require('events')
const door = new EventEmitter();


const openListener = () => {
    console.log('open listener')
}

const onceListner = () => {
    console.log('once listner');
}

door.on('open', openListener);

door.once('open', onceListner);


door.emit('open');
door.emit('open');
door.emit('open');
