import Emitter from './emitter.mjs';
import EventEmitter from 'events';
import util from 'util';

// Simple EventEmitter usage
console.log('--=== Simple EventEmitter example ===--')
let emitter = new Emitter();

emitter.on('greet', function () {
    console.log('Somewhere, someone said hello');
});

emitter.on('greet', function () {
    console.log('A greeting occurred!');
});

console.log('Hello!');
emitter.emit('greet');

// NodeJS EventEmitter usage
console.log('--=== NodeJS EventEmitter example ===--')
function Greetr() {
    this.greeting = 'Hello world!';
}

util.inherits(Greetr, EventEmitter);
Greetr.prototype.greet = function () {
    console.log(this.greeting);
    this.emit('greet');
}

var greeter1 = new Greetr();

greeter1.on('greet', function () {
    console.log('Someone greeted!')
});

greeter1.greet();
