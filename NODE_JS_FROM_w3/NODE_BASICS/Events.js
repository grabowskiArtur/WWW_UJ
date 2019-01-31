const fs = require('fs');
const rs = fs.createReadStream('./myFile1.txt');

const events = require('events');
const eventEmitter = new events.EventEmitter();

const myEventHandler = function(){
    console.log("I hear a scream!");

};
eventEmitter.on('scream', myEventHandler);

rs.on('open',function (err, data) {
//    console.log('The file is open');
    eventEmitter.emit('scream');
});
