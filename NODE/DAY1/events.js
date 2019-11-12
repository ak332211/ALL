// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// function ringBell()
// {
//     console.log("ring Ring ring");
// }

// eventEmitter.on('doorOpen', ringBell);
// eventEmitter.emit('doorOpen');


//events with arguments passing

const EventEmitter = require('events');
var emitter = new EventEmitter();


//register a listener and defining the calback
emitter.on("myevent", (arg)=> {
    console.log("id is " + arg.id+ " and name is "+arg.name);
});


//Raise an event and passing parameters
emitter.emit('myevent', {id:1, name:'Rahul'});