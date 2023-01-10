'use strict';

const { emitter } = require('./functions/emitter/emitter.js');
const null_unit = require('./workers/null/null_unit.js');
const electrical_unit = require('./branches/electrical_unit.js');
const volume_unit = require('./branches/volume_unit.js');
const weather_unit = require('./branches/weather_unit.js');

module.exports = async function unit_symbol(input) {
    if (null_unit(input)) {
        return {input: input, unit: null, symbol: null};
    }

    input = input.toLowerCase().replace(/[\s_-]/g, ''); // lowercase, remove spaces, underscores, hyphen

    emitter.on('true', data => {
        return data;
    })
    
    electrical_unit(input);
    volume_unit(input);
    weather_unit(input);
}