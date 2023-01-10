'use strict';

const events = require('events');
const emitter = new events.EventEmitter();

function emitting(data) {
    const topic = data.unit === null && data.symbol === null ? 'false': 'true';
    emitter.emit(topic, data);
}

function listening() {
    emitter.on('true', (data) => {
        return data;
    })
}

module.exports = {
    emitter,
    emitting,
    listening
}