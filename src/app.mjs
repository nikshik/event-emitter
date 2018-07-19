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
console.log('\n--=== NodeJS EventEmitter example ===--')
function Greetr() {
    EventEmitter.call(this);
    this.greeting = 'Hello world!';
}

util.inherits(Greetr, EventEmitter);
Greetr.prototype.greet = function (data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function (data) {
    console.log('Someone greeted!: ' + data)
});

greeter1.greet('Nik');

// NodeJS EventEmitter with classes usage
console.log('\n--=== NodeJS EventEmitter with classes example ===--')
class GreetrClass extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello class world!';
    }

    greet(data) {
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet', data);
    }
}
var greeter2 = new GreetrClass();

greeter2.on('greet', function (data) {
    console.log('Someone greeted!: ' + data)
});

greeter2.greet('Nik');
