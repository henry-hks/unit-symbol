'use strict';

const emitting = require("../../functions/emitter/emitter.js").emitting;

module.exports = function wind(input) {
    let result = {input: input, unit: null, symbol: null};

    switch (input)
    {
        // air quality
        case 'ppm' :
        case 'partpermillion':        
        case 'partspermillion':         result.symbol = 'ppm';     result.unit = 'Parts Per Million';             break;

        case 'ppb' :        
        case 'partperbillion':
        case 'partsperbillion':         result.symbol = 'ppb';     result.unit = 'Parts Per Billion';             break;

        case 'µg/m3':
        case 'µg/m³':
        case 'ug/m3':
        case 'microgrampercubicmeter':
        case 'microgramspercubicmeter':
        case 'ugperm3' :                result.symbol = 'µg/m³';   result.unit = 'Micrograms Per Cubic Meter';    break;

        case 'mg/m3':
        case 'mg/m³':
        case 'milligrampercubicmeter':
        case 'milligramspercubicmeter':
        case 'mgperm3' :                result.symbol = 'mg/m³';   result.unit = 'Milligrams Per Cubic Meter';    break;
    }
    
    emitting(result);
}