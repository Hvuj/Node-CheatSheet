// var stuff = require('./count');
var events = require('events');
var util = require('util');

// console.log(stuff.counter(['a', 'b', 'c']));
// console.log(stuff.adder(2,3));
// console.log(stuff.adder(stuff.pi, 5));

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', (message) => {
//     console.log(message);
// })

// myEmitter.emit('someEvent', 'the event was emitted');

var Person = function(name) {
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var hvuj = new Person('hvuj');

var people = [james, mary, hvuj];

people.forEach((person) => {
    person.on('speak', (msg) => {
        console.log(person.name + ': said ' + msg);
    })
})

james.emit('speak', 'hey this is james');
hvuj.emit('speak', 'hey this is hvuj');